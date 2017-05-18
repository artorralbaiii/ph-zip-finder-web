'use strict';

let fs = require('fs');

let Zip = require('../models/zip');

module.exports = () => {
    var ctrl = {
        allZip: allZip,
        importData: importData,
        searchZip: searchZip
    };

    return ctrl;

    // Implementations

    function allZip(req, res, next) {
        Zip.find({}, (err, data) => {
            if (err) { next(err); }
            res.json(data);
        });
    }

    function importData(req, res, next) {
        fs.readFile('./src/server/data/data.json', 'utf8', (err, data) => {
            if (err) { next(err); }
            Zip.collection.insertMany(JSON.parse(data), (err, r) => {
                if (err) { next(err); }
                res.json({ 'message': 'success', 'count': r.insertedCount });
            });
        });
    }

    function searchZip(req, res, next) {
        let key = req.params.key;

        if (key) {

            let regex = new RegExp(escapeRegex(key), 'gi');

            Zip.find({ location: regex })
                .limit(5)
                .exec((err, data) => {
                    if (err) { next(err); }
                    res.json(data);
                });
        } else {
            res.json([]);
        }
    }

    function escapeRegex(text) {
        return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
    }

};