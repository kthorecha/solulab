const fs = require('fs');
const path = require('path');

module.exports = {
    create: async function (req, res) {
        let paymentType = req.body.type;
        let clientId = req.body.clientId;
        await getDataAndReturnResp(paymentType, clientId, function (data) {
            console.log(data)
            return res.status(200).send(data);
        });
    }
}



async function getDataAndReturnResp(paymentType, clientId, cb) {
    let user;
    fs.readFile(path.normalize(__dirname + '/../mock.json'), (err, data) => {
        if (err) throw err;
        let userData = JSON.parse(data);
        // console.log(userData);
        fs.readFile(path.normalize(__dirname + '/../payments.json'), (err2, data2) => {
            if (err2) throw err2;
            let paymentData = JSON.parse(data2);
            user = userData.filter(e => e.clientId == clientId);
            let userPayment = paymentData.filter(e => e.clientId == clientId);
            // console.log(user);
            user[0]['amount'] = userPayment[0]['amount'];
            if (paymentType == 'boleto') {
                user[0]['boletoId'] = userPayment[0]['boletoId'];
            } else {
                user[0]['card'] = userPayment[0]['card'];
            }
            cb(user);
        })
    });
    return;
}