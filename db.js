const Pool = require("pg").Pool;

// location of database
const pool = new Pool({
    user: "najeesimmons",
    password: "DFH5926brkavj",
    host: "localhost",
    database: "pernstack",
    port: 5432
});

module.exports = pool;