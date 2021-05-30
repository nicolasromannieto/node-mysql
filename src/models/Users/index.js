const sequelize = require('sequelize');

usdb = "root";
pwddb = "admin";
host = 'mysql';
port = 3306;

const sq = new sequelize({
    dialect: 'mysql',
    database: "node-db",
    username: usdb,
    password: pwddb,
    host: host,
    port: port,
    pool: {
        max: 10
    }
});

const User = sq.define('users', {
    firstName: {
        type: sequelize.STRING,
        primaryKey: true
    },
    lastName: {
        type: sequelize.STRING,
        primaryKey: true
    },
    email: {
        type: sequelize.STRING,
        primaryKey: true
    }
}, {
    tableName: 'users',
    timestamps: false
});

module.exports = {
    User
};
  