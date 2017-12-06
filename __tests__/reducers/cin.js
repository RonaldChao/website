import { createStore, combineReducers } from 'redux'
import reducer from '../../src/reducers'

let store = createStore(combineReducers({reducer}), {})

describe('cin reducer', () => {
  it('CIN_LIST', (done) => {
    const _json = [{a: 'a'}];

    store.dispatch({
        type: 'SET_CIN_LIST',
        list: _json
    });    

    expect(store.getState().reducer.cin.list).toBe(_json)
    done()
  })
})