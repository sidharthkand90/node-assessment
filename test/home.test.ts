// import request from 'supertest';
// import server from '../src/app'

const request = require('supertest')
 const server =require("../src/app");



describe('endpoints', () => {
  it('should create a new post', async () => {
    console.log(server)
    const res = await request(server)
      .post('/api/v1/parse')
      .send({
         "data": "JOHN0000MICHAEL0009994567" 
      })
    expect(res.statusCode).toEqual(200)
  })
  
  it('should create a new post', async () => {
    console.log(server)
    const res = await request(server)
      .post('/api/v2/parse')
      .send({
         "data": "JOHN0000MICHAEL0009994567" 
      })
    expect(res.statusCode).toEqual(200)
  })
  it('should create a error', async () => {
    console.log(server)
    const res = await request(server)
      .post('/api/v2')
      .send({
         "data": "JOHN0000MICHAEL0009994567" 
      })
    expect(res.statusCode).toEqual(404)
  })
  it('should create a response error 500', async () => {
    console.log(server)
    const res = await request(server)
      .post('/api/v2/parse')
      .send({
        "date": "JOHN0000MICHAEL0009994567" 
     })
     var response=JSON.parse(res.text)
    expect(response.statusCode).toEqual(500)
  })
  it('should create a response error v1 500', async () => {
    console.log(server)
    const res = await request(server)
      .post('/api/v1/parse')
      .send({
        "date": "JOHN0000MICHAEL0009994567" 
     })
     var response=JSON.parse(res.text)
    expect(response.statusCode).toEqual(500)
  })
})