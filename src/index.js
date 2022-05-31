require('dotenv').config();
const app = require('./app');
const port = process.env.PORT;

app.listen(port, async  () => {
    console.log(`server run in http://localhost:${  port}`);
});