const Pool = require("pg").Pool;

const pool = new Pool({
    user: "najeesimmns",
    password: "DFH5926brkavj",
    host: "localhost",
    database: "pernstack",
    port: 5432
});

module.exports = pool;