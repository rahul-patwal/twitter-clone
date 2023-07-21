import express from 'express'
import connect from './src/config/database.js';
import router from './src/routes/index.js';
import bodyParser from 'body-parser';


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api', router);

app.listen(3000, async () => {
     console.log(`server running on port 3000`);
     connect();

})