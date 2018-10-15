const express = require('express');
const router = express.Router();
const Heroes = require('./models/heroes');

router.get('/heroes', function(req, res){
    res.send('GET heroes');
});

router.post('/heroes', function(req, res, next){
    const {name, age} = req.body;

    //save to mongoose
    Heroes.create(req.body)
        .then(function(result){
            res.send(result);
        })
        .catch(next)
});

router.put('/heroes/:id', function(req, res){
    res.send('PUT hero')
});

router.delete('/heroes/:id', function(req, res){
    console.log(req.params.id);
    res.send('DELETE hero');
});

module.exports = router;