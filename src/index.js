const app = require('./app');
const { dbConection } = require('./database');

async function main(){
        //conectarse a db
        await dbConection();
        //iniico sv
        await app.listen(5000);
}

main();