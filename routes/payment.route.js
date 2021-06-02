const router = require('express').Router();
// const _ = require('lodash');
const paymentController = require('../controllers/payment.controller');


router.get('/', (req, res) => {
    res.send("payment works");
});

router.post('/create', paymentController.create);



module.exports = router;