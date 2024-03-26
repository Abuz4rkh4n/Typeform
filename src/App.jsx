import React from "react";
import Form from "./components/Form/Form";
import Left from "./components/Left/Left";

const App = () => {
  return (
    <>
      <div className=" bg-my-black flex items-center ">
        <Left />
        <Form />
      </div>
    </>
  );
};

export default App;
