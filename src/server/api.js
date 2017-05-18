'use strict';

let zipCtrl = require('./controllers/zip.controller')();

module.exports = (express) => {

    let api = express.Router();

    api.get('/zip', zipCtrl.allZip);
    api.get('/zip/:key', zipCtrl.searchZip);
    api.get('/import', zipCtrl.importData);

    return api;
};