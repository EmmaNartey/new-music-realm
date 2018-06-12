var db = require('../../DB/db');
var _ = require('lodash');
var utils = require('../../utils');
var validator = require('validator');

const editionsController = {

    create (req, res, next) {
        req.checkBody('name', 'name required').notEmpty();
        req.checkBody('thumbnail', 'thumbnail required').notEmpty();

        var errors = req.validationErrors();
        if (errors) {
            res.status(400).json(errors);
            return;
        }

        db.select('id')
            .from('editions')
            .where('name', req.body.name)
            .then(function(rows) {
                if (rows.length > 0) {
                    res.status(409).send(rows[0].id.toString());
                } else {
                    db.insert({
                        name: req.body.name,
                        thumbnail: req.body.thumbnail
                    })
                    .into('editions')
                    .then(function(ids) {
                        res.status(201).send("1");
                    }).catch(next);
                }
            }).catch(next);
    },

    all (req, res, next) {
        
        req.checkQuery('limit', 'should be integer').optional().isInt();
        req.checkQuery('offset', 'should be integer').optional().isInt();

        var errors = req.validationErrors();
        if (errors) {
            res.status(400).json(errors);
            return;
        }

        var limit = validator.toInt(req.query.limit) || 15;
        var offset = validator.toInt(req.query.offset) || 0;

        var baseQuery = db.from('editions')

        var dataQuery = baseQuery.clone()
            .select('*')
            .from('editions')
            .orderBy('name')
            .limit(limit).offset(offset)

        var cntQuery = baseQuery.clone().count('* as cnt');

        var nextUrl, prevUrl;

        cntQuery.then(function(rows) {
            var cnt = validator.toInt(rows[0].cnt);

            if ((limit + offset) < cnt) {
                nextUrl = utils.modifyQueryString(req, {offset: offset + limit});
            }

            if (offset > 0) {
                prevUrl = utils.modifyQueryString(req, {offset: offset > limit ? offset - limit : 0})
            }

            return dataQuery;
        }).then(function(rows) {
            db('editions')
            .count('id as count')
                .then(function(mCount){
                    var resData = {
                            count: mCount[0].count,
                            editions: rows.map(function(row) {
                                return {
                                    id: row.id,
                                    name: row.name,
                                    thumbnail: row.thumbnail
                                }
                            }),
                            paging: {
                                next: nextUrl,
                                prev: prevUrl
                            }
                    };
                res.send(resData);
            }).catch(next);
        }).catch(next);
    },

    byId (req, res, next) {

        var errors = req.validationErrors();
        if (errors) {
            res.status(400).json(errors);
            return;
        }

        db.select('*')
            .from('editions')
            .where('id', req.params.id)
            .then(function(rows) {
                if (rows.length > 0) // exists
                {
                    res.status(409).send(rows);
                }
                else{    // existeth not
                    res.sendStatus(404);
                }
            }).catch(next);
    },

    update (req, res, next) {

        req.checkBody('name', 'name required').notEmpty();
        req.checkBody('thumbnail', 'thumbnail required').notEmpty();

            var errors = req.validationErrors();
            if (errors) {
                res.status(400).json(errors);
                return;
            }

            db('editions')
                .where('id', req.params.id)
                .update({
                    name: req.body.name,
                    thumbnail: req.body.thumbnail
                })
                .then(function (rows) {
                    res.sendStatus(200);
                }).catch(next);
    },

    remove (req, res, next) {

        var errors = req.validationErrors();
        if (errors) {
            res.status(400).json(errors);
            return;
        }

        db.del()
            .from('editions')
            .where('id', req.params.id)
            .then(function(rows) {
                res.sendStatus(200);
            }).catch(next);
    }
};

module.exports = editionsController;
