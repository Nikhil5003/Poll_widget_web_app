import "./App.css";
import React, { useCallback, useState } from "react";
import Myfunction from "./useCallBack";
import PollComponent from "./PollComponent";

function App() {
  // const [count, setCount] = useState(0);
  // const [count2, setCount2] = useState(0);
  // const func = useCallback(() => {
  //   console.log("this is sample function");
  // }, [count2]);
  // const handleClick = () => {
  //   setCount((count) => count + 1);
  // };
  const data = [
    { id: 1, label: "Multiple Blogs", voteCount: 12 },
    { id: 2, label: "Photo Galleries", voteCount: 13 },
    { id: 3, label: "Forums", voteCount: 14 },
    { id: 4, label: "Online Manuals", voteCount: 15 },
    { id: 5, label: "Easy Maintenance", voteCount: 16 },
  ];
  return (
    <div className="App">
      {/* <button style={{ display: "block" }} onClick={handleClick}>
        {count}
      </button>
      <button
        onClick={() => {
          setCount2(count2 + 1);
        }}
      >
        {count2}
      </button>
      <Myfunction func={func} /> */}
      <h1>Poll Component</h1>
      <h2>What is your favourite b2evolution feature</h2>
      <PollComponent data={data} />
    </div>
  );
}

export default App;
