import { Button } from "bootstrap";
import React, { useState } from "react";

const User = () => {
  const [isLoggedIn, setLoggIn] = useState(true);

  // return (
  //     <div>
  //         <h1>Welcome Guest</h1>
  //         <h1>Welcome Mark</h1>
  //     </div>
  // )

  // 1: if and else
  // if(isLoggedIn){
  //     return <h1>Welcome Mark</h1>
  // }else{
  //     return <h1>Welcome Guest</h1>
  // }

  // 2: element value
  // let response;
  // if(isLoggedIn){
  //     response = <h1>Welcome Mark</h1>
  // }else{
  //     response = <h1>Welcome Guest</h1>
  // }
  // return <div>{ response }</div>

  // 3: turnery operator
  // return(
  //     isLoggedIn ? <h1>Welcome Mark</h1> : <h1>Welcome Guest</h1>
  // )

  // 4: circuit breaker
  // return isLoggedIn && <h1>Welcome Mark</h1>

  return isLoggedIn ? (
    <button className="btn btn-danger">Logout</button>
  ) : (
    <button className="btn btn-primary">Login</button>
  );
};

export default User;
