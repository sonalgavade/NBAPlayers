const players = require('./models/players');

module.exports = function(app) {

// server routes ==============
// handle things like api calls
// authentication routes

// sample api routes
// app.get('/api/players', function(req, res) {
app.get('/api/players', function(req, res) {
    // use mongoose to get all players in the database
    
        players.find(function(err, players){
            if(err){
                res.json(err);
            }
            else{
                res.json(players);
            }
        });
});

// route to handle creating goes here (app.post)
app.post('/api/players', function(req, res) {
    let newPlayer = new players({
        Player: req.body.Player,
        Tm: req.body.Tm,
        season17_18: req.body.season17_18
    });
    newPlayer.save(function(err, players){
        if(err){
            res.json(err);
        }
        else{
            res.json({msg: 'Player was added successfully to the database'});
        }
    });
});

// route to handle update goes here (app.delete)
app.put('/api/players/:id', function(req, res) {
    players.findOneAndUpdate({_id: req.params.id}, {
        $set: {
            Player: req.body.Player,
            Tm: req.body.Tm,
            season17_18: req.body.season17_18
        }
    },
    function(err, result){
        if(err){
            res.json(err);
        }
        else{
            // console.log("update and set was successfull");
            res.json(result);
        }
    })

});

// route to handle delete goes here (app.delete)
app.delete('/api/players/:id', function(req, res) {
    players.deleteOne({_id: req.params.id}, function(err, result){
        if(err){
            res.json(err);
        }
        else{
            // console.log("update and set was successfull");
            res.json(result);
        }
    });

});
}