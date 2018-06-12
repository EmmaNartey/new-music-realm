var db = require('../../DB/db');
var moment = require('moment');
var _ = require('lodash');
var utils = require('../../utils');
var validator = require('validator');
var converters = require('../../converters');

const searchController = {

    all (req, res, next) {
        
        req.checkQuery('title', 'should be text').optional();
        req.checkQuery('artiste', 'should be text').optional();

        req.checkQuery('limit', 'should be integer').optional().isInt();
        req.checkQuery('offset', 'should be integer').optional().isInt();

        var errors = req.validationErrors();
        if (errors) {
            res.status(400).json(errors);
            return;
        }

        var title = '%'+req.query.title+'%';
        var artiste = '%'+req.query.artiste+'%';

        var limit = validator.toInt(req.query.limit) || 15;
        var offset = validator.toInt(req.query.offset) || 0;

        var baseQuery = db.from('songs as s')

        var dataQuery = baseQuery.clone()
            .select('*')
            .from('songs')
            .where('title', 'like', title)
            .orWhere('artiste', 'like', artiste)
            .orderBy('songs.pub_date', 'desc')
            .limit(limit).offset(offset)

        var cntQuery = baseQuery.clone().count('* as cnt')

        var nextUrl, prevUrl

        cntQuery.then(function (rows) {
            var cnt = validator.toInt(rows[0].cnt)

            if ((limit + offset) < cnt) {
                nextUrl = utils.modifyQueryString(req, {offset: offset + limit})
            }

            if (offset > 0) {
                prevUrl = utils.modifyQueryString(req, {offset: offset > limit ? offset - limit : 0})
            }

            return dataQuery
        }).then(function(rows) {
            db('songs')
            .count('id as count')
            .then(function (mCount){
                var resData = {
                    count: mCount[0].count,
                    songs: rows.map(function (row) {
                        return {
                        id: row.id,
                        artiste: row.artiste,
                        title: row.title,
                        description: row.description,
                        pub_date: moment(row.pub_date).format('YYYY-MM-DD HH:mm:ss'),
                        thumbnail: row.thumbnail,
                        source: row.source,
                        edition: row.edition,
                        content_provider: row.content_provider,
                        insert_ts: moment(row.insert_ts).format('YYYY-MM-DD HH:mm:ss'),
                        link: row.link,
                        comments_count: row.comments_count,
                        likes_count: row.likes_count
                        }
                    }),
                    paging: {
                        next: nextUrl,
                        prev: prevUrl                  
                    }
                };
                res.send(resData);
            }).catch(next);
        }).catch(next)    
    }
}

module.exports = searchController;
