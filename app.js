console.log()
console.log('🍟🍕 🍚🍨🍥🥞🥓 Welcome to Zomato App  🫕🥘🍝🍩🍭🍦')
const express = require('express')
const app = express()
const callApis = require('./routes/index')
app.use(express.json())

app.use('/', callApis)

app.listen(7000, (err) => {
    if(err) throw err;
    console.log()
});
