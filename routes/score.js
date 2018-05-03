
var Score = require('../models/score');


module.exports = function (app) {
    app.get('/hi', function (req, res) {
        res.send('hi');
    });
    app.post('/score/add', function (req, res, next) {
        let body = req.body;
        var newScore = new Score(body);
        // NewScore = body;


        newScore.save(function (err) {
            console.error(err);
            return;
        });
        res.send("your devices added to list,thank you very muchhhhhh");
    });
    app.get('/score/all', function (req, res) {
        Score.find({}).exec(function (error, finderresult) {
            res.json(finderresult);
        });
    });
    app.get('/score/find/:id', function (req, res) {
        console.log(req.params.id);
        var query = Score.find();
        query.nor([{ score: { $gt: req.params.id + 2 } }, { score: { $lt: req.params.id - 2 } }])

        query.nor([{ score: { $gt: req.params.id + 2 } }, { score: { $lt: req.params.id - 2 } }]).limit(5)
            .exec(function (error, finderresult) {
                res.json(finderresult);
            });

        // Score.find(
        //     {
        //         $or: [{ score: req.params.id },
        //         { score: req.params.id - 1 },
        //         { score: req.params.id + 1 },
        //         { score: req.params.id - 2 },
        //         { score: req.params.id + 2 },
        //         { score: req.params.id - 3 }]}
        // ).limit(3).exec(function (error, finderresult) {
        //     res.json(finderresult);
        // });
    });
};