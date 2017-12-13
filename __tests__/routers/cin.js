import express from 'express'
import router from '../../src/routers/cin.js'
import httpMocks from 'node-mocks-http'
let targetId, targetX = 123, targetY = 999, updatedName = 'sillyPeter'

const shouldHaveKeys = (obj, keysList) => {
  const keys = (typeof obj.toJSON === 'function') ? Object.keys(obj.toJSON()) : Object.keys(obj)
  const missedKeys = []
  keysList.forEach(shouldHaveKey => {
    if (keys.indexOf(shouldHaveKey) && (keys.indexOf(shouldHaveKey) === -1)) {
      missedKeys.push(shouldHaveKey)
    }
  })
  expect(JSON.stringify(missedKeys)).toBe(JSON.stringify([]))
}

describe('GET router', () => {
  it('should return the initial state', (done) => {
    const req = httpMocks.createRequest({method: 'GET',url: '/'})
    const res = httpMocks.createResponse()
    res.json = function (cinList) {  
      cinList.forEach(ele => shouldHaveKeys(ele, ['id', 'location', 'alias', 'name', 'createdAt']))
      targetId = cinList[0].id
      done()
    }
    router.handle(req, res)
  })
})

describe('PUT router', () => {
  it('should return the initial state', (done) => {
    const req = httpMocks.createRequest({
      method: 'PUT',
      url: `/${targetId}`,
      body: {
        name: updatedName,
        geo: [targetX, targetY]
      }
    })
    const res = httpMocks.createResponse()
    res.responseOK = function (cinList) {
      done()
    }
    router.handle(req, res)
  })
})

describe('GET router/:id', () => {
    it('should return obj of /:id', (done) => {
      const req = httpMocks.createRequest({
        method: 'GET',
        url: `/${targetId}`,
      })
      const res = httpMocks.createResponse()
      res.json = function (cinList) {
        expect(cinList.name).toBe(updatedName)
        expect(JSON.stringify(cinList.geo)).toBe(JSON.stringify([targetX, targetY]))
        done()
      }
      router.handle(req, res)
    })
  })
