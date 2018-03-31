//
//
// export function fetchUser(){
//   return {
//     type: "FETCH_USER_FULFILLED",
//     payload: {
//       name: "avdeep",
//       age: 23,
//     }
//   }
// }
//
// export function setUsername(name){
//   return ({
//     type: "SET_USER_NAME",
//     payload: name
//   });
// }
//
// export function setUserage(age){
//   return ({
//     type: "SET_USER_AGE",
//     payload: age
//   })
// }


export function setUserName(name){
  return {
    type: "SET_NAME",
    payload: name
  };
}
export function setAge(age){
  return {
    type: "SET_AGE",
    payload: age
  };
}
