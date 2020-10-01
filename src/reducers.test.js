import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants';

import * as reducers from './reducers';




describe('request robots', () => {
    const initialStateRobots = {
        robots: [],
        isPending: false
    }

    test('should return initial state', () => {
        expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots)
    })

    test('should handle REQUEST_ROBOTS_PENDING action',()=>{
        expect(reducers.requestRobots(initialStateRobots,{
            type:REQUEST_ROBOTS_PENDING
        })).toEqual({
            robots: [],
            isPending: true
        })
    })

    test('should handle REQUEST_ROBOTS_SUCCESS action',()=>{
        expect(reducers.requestRobots(initialStateRobots,{
            type:REQUEST_ROBOTS_SUCCESS,
            payload:[{
                id:123,
                name:'test',
                email:'test@gmail.com'
            }]
        })).toEqual({
            robots: [{
                id:123,
                name:'test',
                email:'test@gmail.com'
            }],
            isPending: false
        })
    })


    test('should handle REQUEST_ROBOTS_FAILED action',()=>{
        expect(reducers.requestRobots(initialStateRobots,{
            type:REQUEST_ROBOTS_FAILED,
            payload:'Errrooorrr'
        })).toEqual({
            error: 'Errrooorrr',
            robots: [],
        isPending: false
        })
    })

})