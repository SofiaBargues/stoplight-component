import { useEffect, useState } from "react";

function App() {
  const [light, setLight] = useState("red");

  useEffect(() => {
    // Use setTimeout to update the message after 2000 milliseconds (2 seconds)
    const changingLight =
      light === "red" ? "green" : light === "green" ? "yellow" : "red";
    const duration =
      changingLight === "red" ? 2000 : changingLight === "green" ? 5000 : 15000;
    const timeoutId = setTimeout(() => {
      setLight(changingLight);
    }, duration);
    console.log(duration, light);
    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timeoutId);
  }, [light]); // Empty dependency array ensures the effect runs only once

  return (
    <div>
      <div className=" round"> {light}</div>
    </div>
  );
}

export default App;
