const bluebird = require('bluebird');
const dotenv = require('dotenv');
const pgp = require('pg-promise');

const dbConfig = require('./server/database');
const expressConfig = require('./server/express');

(async () => {
    dotenv.config();

    const port = process.env.SERVER_PORT;

    const db = dbConfig(bluebird, pgp);
    const app = expressConfig(db);

    app.listen(port, console.log(`Listening on port ${port}`));
})().catch((err) => {
    console.error(err);
});
