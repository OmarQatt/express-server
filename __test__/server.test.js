'use strict';

const supertest = require('supertest');
const server = require('../server');
const request = supertest(server.app);


describe('API server', () => {
  it('Home page works', async () => {
    const res = await request.get('/');
    expect(res.status).toEqual(200);
    expect(res.text).toEqual('Hello World')
  });
  it('Check if new age is greater than old age', async () => {
    const fakePerson = {
      name: "omar",
      age: 23,
      gender: "male" };
    const res = await request.post("/person").send({ ...fakePerson });
    expect(res.text).toEqual("28");
  });
})