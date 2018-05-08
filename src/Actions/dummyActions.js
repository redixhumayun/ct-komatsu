import * as types from './types'
/*
    This is an action creator to create a dummy action
    to prove caching works
*/
export const getDummyData = () => ({
  type: types.GET_DUMMY_DATA,
  payload: {
    request: {
      url: '/dummy'
    }
  }
})
