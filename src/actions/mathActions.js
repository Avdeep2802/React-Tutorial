// import axios from 'axios';
//
//
// export function fetchTweets(){
//   return function(dispatch){
//     axios.get("http://rest.learncode.academy/api/test123/tweets ").then((response)=> {
//       dispatch({type: "FETCH_TWEETS_FULFILLED", payload: response.data})
//     }).catch((err)=>{
//       dispatch({type: "FETCH_TWEETS_REJECTED", payload: err})
//     })
//   }
// }
//
// export function addTweet(id, text){
//   return ({
//     type: "Add_TWEET",
//     payload: {
//       id,
//       text
//     }
//   })
// }
//
// export function setUserage(age){
//   return ({
//     type: "SET_USER_AGE",
//     payload: age
//   })
// }


export function add_number(number){
  return {
    type: "ADD",
    payload: number
  };
}
export function sub_number(number){
  return {
    type: "SUBSTRACT",
    payload: number
  };
}
