import { useContext, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let link = useRef();

  // function postLongUrl() {
  //   console.log(link.current.value);
  //   try {
  //     fetch("http://localhost:5173/url-shortner", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ "url": link.current.value }),
  //     }).then(response => {
  //       if (!response.ok) {
  //         throw new Error("Failed to post URL to the backend");
  //       }
  //       return response.json();
  //     })
  //     .then(data => {
  //       console.log("URL successfully posted to the backend", data);
  //     })
  //     .catch(error => {
  //       console.error("Error posting URL to the backend:", error);
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  return (
    <div className="flex flex-col h-[50vh] justify-center">
      <h1 className="bg-red-500 text-2xl">URL SHORTNER</h1>
      <form
        action="https://databaseforurls.onrender.com/url-shortner/"
        method="post"
      >
        <input
          type="text"
          placeholder="Enter Url"
          id="longUrl"
          name="longUrl"
          className="border border-black w-[100%] py-1 px-3 max-w-[800px] mt-3"
        />
        <button className="bg-green-600 px-5 py-1 font-bold ml-2 text-white">
          Submit
        </button>
      </form>
    </div>
  );
}
// exporlink;
export default App;
