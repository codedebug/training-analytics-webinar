'use strict';

const Lab = require('lab');
const lab = exports.lab = Lab.script();
const describe = lab.experiment;
const before = lab.before;
const it = lab.it;
const Code = require('code');
const expect = Code.expect;

const publisher = require('../src/publisher');

describe('publisher', () => {
  describe('with a valid connection', () => {
    let pub;

    before((done) => {
      publisher.getInstance((err, result) => {
        expect(err).to.not.exist();
        expect(result).to.be.an.object();
        pub = result;
        done();
      });
    });

    it('publishMsg() should publish a message', (done) => {
      pub.publishMsg('analytics.test', 'some message', (err, result) => {
        expect(err).to.not.exist();
        expect(result).to.be.equal('Message sent!');
        done();
      });
    });

    it('closeConnection() should close a connection', (done) => {
      pub.closeConnection(() => {
        done();
      });
    });
  });
});
