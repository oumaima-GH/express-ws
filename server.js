const app = require('./index')
const host = '127.0.0.1'
const port = 3000


app.listen(port, host, ()=>{
    console.log(`server is running on: http://${host}:${port}`);
})

