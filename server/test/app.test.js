

const request = require('supertest');
const expect = require('chai').expect;
// bring in connection
const knex = require('../db/knex');


const application = require('../app');

const fixtures = require('./fixtures');


describe('randomPost CRUD', () => {
    
    before((done) => {
        // run migrations
        knex.migrate.latest()
            .then(() => {
                // run seeds
                return knex.seed.run();
            }).then(() => done());     
    });


    it('GET all users', (done) => {
        request(application)
            .get('/api/v1/users')
            .set('Accept', 'application/json')
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(200)
            .then((response) => {
                expect(response.body).to.be.a('array');
                expect(response.body).to.deep.equal(fixtures.users);
                console.log(response.body);
                done();
            })
    })



    it('GET a user by id', (done) => {
        request(application)
            .get('/api/v1/users/1')
            .set('Accept', 'application/json')
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(200)
            .then((response) => {
                expect(response.body).to.be.a('object');
                expect(response.body).to.deep.equal(fixtures.users[0]);
                console.log(response.body);
                done();
            })
    })
})