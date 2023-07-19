import mysql from 'mysql';

const connection = mysql.createConnection({
    host: 'localhost', // Replace with your MySQL host
    user: 'root', // Replace with your MySQL username
    password: '', // Replace with your MySQL password
    database: 'next_db', // Replace with your MySQL database name
  });

  connection.connect();

  export default connection;