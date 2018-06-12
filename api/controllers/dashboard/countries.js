var db = require('../../DB/db');

const countriesController = {

    all (req, res, next) {
        
        var errors = req.validationErrors();
        if (errors) {
            res.status(400).json(errors);
            return;
        }

        db.select('*')
            .from('all_countries')
            .then(function(rows) {
                if (rows.length > 0) //meaning exists
                {
                    res.status(200).send(rows);
                }
                else{    //user existeth not
                    res.sendStatus(404);
                }
            }).catch(next);
    }
};

module.exports = countriesController
