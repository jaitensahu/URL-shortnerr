import { useContext, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let link = useRef();

  function postLongUrl() {
    console.log(link.current.value);
    try {
      fetch("http://localhost:5173/url-shortner", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ "url": link.current.value }),
      }).then(response => {
        if (!response.ok) {
          throw new Error("Failed to post URL to the backend");
        }
        return response.json();
      })
      .then(data => {
        console.log("URL successfully posted to the backend", data);
      })
      .catch(error => {
        console.error("Error posting URL to the backend:", error);
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h1 className="bg-red-500">URL SHORTNER</h1>
      {/* <form action="http://localhost:5000/url-shortner" method="post"> */}
      <input type="text" placeholder="Enter Url" ref={link} />
      <button onClick={() => postLongUrl()}>Submit</button>
      {/* </form> */}
    </>
  );
}
// exporlink;
export default App;
