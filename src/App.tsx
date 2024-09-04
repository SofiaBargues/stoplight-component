import { useEffect, useState } from "react";

function stopLigth(initialColor: string) {
  <div className=" m-auto flex flex-col gap-3">
    <div
      style={
        initialColor === "#ea3324"
          ? { background: "#ea3324" }
          : { background: "#7f7f7f" }
      }
      className="rounded-full h-14 w-14"
    ></div>
    <div
      style={
        initialColor === "#fffe57"
          ? { background: "#fffe57" }
          : { background: "#7f7f7f" }
      }
      className="rounded-full h-14 w-14"
    ></div>
    <div
      style={
        initialColor === "#387e23"
          ? { background: "#387e23" }
          : { background: "#7f7f7f" }
      }
      className="rounded-full h-14 w-14"
    ></div>
  </div>;
}

function App() {
  const [light, setLight] = useState("#ea3324");

  useEffect(() => {
    // Use setTimeout to update the message after 2000 milliseconds (2 seconds)
    const changingLight =
      light === "#ea3324"
        ? "#387e23"
        : light === "#387e23"
        ? "#fffe57"
        : "#ea3324";
    const duration =
      changingLight === "#ea3324"
        ? 2000
        : changingLight === "#387e23"
        ? 5000
        : 15000;
    const timeoutId = setTimeout(() => {
      setLight(changingLight);
    }, duration);
    console.log(duration, light);
    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timeoutId);
  }, [light]); // Empty dependency array ensures the effect runs only once

  return (
    <div className="justify-center h-screen flex  ">
      <div className=" m-auto flex flex-col gap-3">
        <div
          style={
            light === "#ea3324"
              ? { background: "#ea3324" }
              : { background: "#7f7f7f" }
          }
          className="rounded-full h-14 w-14"
        ></div>
        <div
          style={
            light === "#fffe57"
              ? { background: "#fffe57" }
              : { background: "#7f7f7f" }
          }
          className="rounded-full h-14 w-14"
        ></div>
        <div
          style={
            light === "#387e23"
              ? { background: "#387e23" }
              : { background: "#7f7f7f" }
          }
          className="rounded-full h-14 w-14"
        ></div>
      </div>
      <div className=" m-auto flex flex-col gap-3">
        <div
          style={
            light === "#ea3324"
              ? { background: "#ea3324" }
              : { background: "#7f7f7f" }
          }
          className="rounded-full h-14 w-14"
        ></div>
        <div
          style={
            light === "#fffe57"
              ? { background: "#fffe57" }
              : { background: "#7f7f7f" }
          }
          className="rounded-full h-14 w-14"
        ></div>
        <div
          style={
            light === "#387e23"
              ? { background: "#387e23" }
              : { background: "#7f7f7f" }
          }
          className="rounded-full h-14 w-14"
        ></div>
      </div>
      <div className=" m-auto flex flex-col gap-3">
        <div
          style={
            light === "#ea3324"
              ? { background: "#ea3324" }
              : { background: "#7f7f7f" }
          }
          className="rounded-full h-14 w-14"
        ></div>
        <div
          style={
            light === "#fffe57"
              ? { background: "#fffe57" }
              : { background: "#7f7f7f" }
          }
          className="rounded-full h-14 w-14"
        ></div>
        <div
          style={
            light === "#387e23"
              ? { background: "#387e23" }
              : { background: "#7f7f7f" }
          }
          className="rounded-full h-14 w-14"
        ></div>
      </div>
    </div>
  );
}

export default App;
