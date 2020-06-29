import { createConnection } from 'mysql';
import { databaseHost, databaseUser, databasePassword, databaseName } from './config';

let con = createConnection({
    host: databaseHost,
    user: databaseUser,
    password: databasePassword,
    database: databaseName,
    multipleStatements: true
});
establish();
 function establish() {
    setTimeout(function () {
        con.connect(function (err) {
            if (err) {
                console.log('Error connecting to Database' + err.message);
                return;
            }

            console.log("Started iteration on - " + new Date());
            console.log("Connection established");
        });
    }, 3000);
}

export { con };