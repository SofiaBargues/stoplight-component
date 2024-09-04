import { useEffect, useState } from "react";

function StopLight({ initialColor }: { initialColor: string }) {
  return (
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
    </div>
  );
}

function App() {
  const [light, setLight] = useState(["#ea3324", "#fffe57"]);

  useEffect(() => {
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
    return () => clearTimeout(timeoutId);
  }, [light]);

  return (
    <div className="justify-center h-screen flex  ">
      <div
        className=" m-auto flex  gap-8
      "
      >
        <StopLight initialColor={light} />
        <StopLight initialColor={light} />
        <StopLight initialColor={light} />
        <StopLight initialColor={light} />
        <StopLight initialColor={light} />
        <StopLight initialColor={light} />
      </div>
    </div>
  );
}

export default App;
