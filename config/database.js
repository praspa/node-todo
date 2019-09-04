const TODO_DB_SVC = process.env.DATABASE_SERVICE_NAME;
const TODO_DB_USER = process.env.MONGODB_USER;
const TODO_DB_PWD = process.env.MONGODB_PASSWORD;
const TODO_DB = process.env.MONGODB_DATABASE;

const TODO_CONN_STR = 'monogodb://' + TODO_DB_USER + ':' + TODO_DB_PWD + '@' + TODO_DB_SVC + ':27017/' + TODO_DB;


module.exports = {
    remoteUrl: TODO_CONN_STR,
    localUrl: TODO_CONN_STR
};
