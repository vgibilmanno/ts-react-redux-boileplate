const express = require('express')
var cors = require('cors')
const app = express()

app.use(cors())

let state = {
    id: 0,
    text: 'initial text'
}

app.get('/api/getDummyData', (req, res) => {
    res.status(200).json(state);
})

app.post('/api/postText', (req, res) => {
    state.text = req.query.text;
    res.status(200);
})

app.listen(9050, () => console.log('Listening on port 9050'))