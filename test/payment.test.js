const mocha = require('mocha');
const chai = require('chai');
const payment = require('../controllers/payment.controller');
const chaiHttp = require('chai-http');
const { expect, assert } = require('chai');
const server = 'http://localhost:8080/';

chai.use(chaiHttp);

describe("It should be able to show payment", () => {
    it("boleto payment", () => {
        let obj = {
            "clientId":4,
            "type": "boleto"
        }
        chai.request(server)
        .post('payment/create')
        .send(obj)
        .end((err, res) => {
            console.log('chhhhaiii errr',err)
            console.log('chhhhaiii',res.body[0])
            expect(err).to.be.null;
            expect(res.body[0]).contains.keys(['Buyer', 'amount', 'boletoId', 'clientId'])
        })
    })
})