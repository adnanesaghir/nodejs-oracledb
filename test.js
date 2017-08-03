'use strict';

const oracledb = require('oracledb');

const config = {
  oracleUser: "***",
  oraclePassword: "***",
  oracleConnectString: "***"
};

oracledb.getConnection({
  user: config.oracleUser,
  password: config.oraclePassword,
  connectString: config.oracleConnectString
}, (err, connection) => {
  if (err) {
    console.error('Error: ', err.message);
    return;
  }
  connection.execute('SELECT * FROM DUAL', (err, res) => {
    if (err) {
      console.error('Error: ', err.message);
      return;
    }
    console.log('Result: ', res);
    connection.close((err) => {
      if (err) {
        console.error('Error: ', err.message);
      }
    });
  });
});
