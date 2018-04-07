import {FETCH_POSTS} from '../actions'
import _ from 'lodash'

export default function (state= {},action){
  console.log("Outer"); 
  switch (action.type) {
    case FETCH_POSTS:
       console.log("H@");
       return _.mapKeys(action.payload.data,'id');
    default:
    return state;

  }
}
