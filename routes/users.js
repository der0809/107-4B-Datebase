var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    // res.send('404411091黃柏耀 Welcom to tamkang university');

    res.json([{
        id: 1,
        username: "404411091黃柏耀"
    }, {
        id: 2,
        username: "組員:邱穎雋,陳家輔"
    }]);
});




module.exports = router;