var fantasy_football = require('./models/fantasy_football');

module.exports = {
    configure: function(app) {
        app.get('/teams/', function(req, res) {
            fantasy_football.getTeam(res);
        });

        app.put('/players/', function(req, res) {
            fantasy_football.updateTeam(res);
        });

        // app.post('/players-create/', function (req, res) {
        //   fantasy_football.create(req.body, res)
        // })
        //
        // app.put('/players-update/', function (req, res) {
        //   fantasy_football.update(req.body, res)
        // })
        //
        // app.delete('/players-delete/:id/', function (req, res) {
        //   fantasy_football.delete(req.params.id, res)
        // })
    }
};
