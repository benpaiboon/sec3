const mongoUsername = 'dbbook';
const mongoPassword = 'dbbook123'
const mongoHost = '@ds153948.mlab.com:53948';
const dbName = 'book-management';
const mongoURI = `mongodb://${mongoUsername}:${mongoPassword}${mongoHost}/${dbName}`;

module.exports = {
  username: mongoUsername,
  password: mongoPassword,
  host: mongoHost,
  dbName: dbName,
  uri: mongoURI
}