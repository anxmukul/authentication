import React from "react";

function Home(props) {
  return (
    <div>
      <h2>You are loged in {props.username}</h2>
    </div>
  );
}

export default Home;
