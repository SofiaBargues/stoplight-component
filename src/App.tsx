import { useEffect, useState } from "react";

function App() {
  const [light, setLight] = useState("red");

  useEffect(() => {
    // Use setTimeout to update the message after 2000 milliseconds (2 seconds)
    const timeoutId = setTimeout(() => {
      setLight("green");
    }, 5000);

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div>
      <div className=" round"> {light}</div>
    </div>
  );
}

export default App;
