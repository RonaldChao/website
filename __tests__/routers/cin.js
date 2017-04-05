import express from 'express'
import router from '../../src/routers/cin.js'
import httpMocks from 'node-mocks-http'

const shouldHaveKeys = (obj, keysList) => {    
    const keys = (typeof obj.toJSON === 'function')? Object.keys(obj.toJSON()) : Object.keys(obj)
    const missKeys = []
    keysList.forEach( shouldHaveKey => {
        if( keys.indexOf(shouldHaveKey) && (keys.indexOf(shouldHaveKey) === -1)){
            missKeys.push(shouldHaveKey)
        }
    })    
    expect(JSON.stringify(missKeys)).toBe(JSON.stringify([]))
}

describe('router', () => {
  it('should return the initial state', (done) => {
    const req = httpMocks.createRequest({method: 'GET',url: '/'});
    const res = httpMocks.createResponse();
    res.json = function(cinList) {
        shouldHaveKeys(cinList[0], ['id','location','alias','name','createdAt',])
        done();
    };
    return router.handle(req, res)
  })
})