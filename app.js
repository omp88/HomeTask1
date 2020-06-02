import express from 'express';
import router  from './homework2/routes/router.js'


const port = 8000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', router);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))