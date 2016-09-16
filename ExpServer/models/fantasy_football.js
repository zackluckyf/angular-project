var connection = require('../connection');

function Fantasy () {
  this.getTeam = function (res) {
    connection.acquire(function (err, con) {
      con.query('select name from teams', function (err, result) {
        con.release();
        res.send(result);
      });
    });
  };

  this.updateTeam = function (name, res) {
    connection.acquire(function (err, con) {
      con.query('update team set ? where name = ?', [name, players.name], function (err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'team update failed'});
        } else {
          res.send({status: 0, message: 'team updated successfully'});
        }
      });
    });
  };
  //   this.create = function (name, res) {
  //     connection.acquire(function (err, con) {
  //       con.query('insert into players set ?', name, function (err, result) {
  //         con.release()
  //         if (err) {
  //           res.send({status: 1, message: 'player creation failed'})
  //         } else {
  //           res.send({status: 0, message: 'player created successfully'})
  //         }
  //       })
  //     })
  //   }
  //
  //
  //   this.delete = function (id, res) {
  //     connection.acquire(function (err, con) {
  //       con.query('delete from players where id = ?', [id], function (err, result) {
  //         con.release()
  //         if (err) {
  //           res.send({status: 1, message: 'Failed to delete'})
  //         } else {
  //           res.send({status: 0, message: 'Deleted successfully'})
  //         }
  //       })
  //     })
  //   }

}

module.exports = new Fantasy();
