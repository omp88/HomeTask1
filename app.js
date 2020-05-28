import express from 'express';
import bodyParser from 'body-parser';
import router  from './homework2/routes/router.js'


const port = 8000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', router);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))