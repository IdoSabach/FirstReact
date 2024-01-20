import Button from "./components/Button";
import { useState } from "react";

export default function App() {
  const [curr, setCurr] = useState();
  const arr = {
    text1: "1",
    text2: "2",
    text3: "3",
    text4: "4",
    text5: "5",
    text6: "6",
    text7: "7",
    text8: "8",
    text9: "9",
  };

  function handleClick(name) {
    setCurr(name);
    console.log(name);
  }

  return (
    <>
      <header className="head">Title of page</header>
      <section className="mainBox">
        <section className="sectionOne">
          <Button
            text={"Click me"}
            onSelect={() => handleClick(arr.text1)}
            curr={curr === "1"}
          />
          <Button
            text={"Click me"}
            onSelect={() => handleClick(arr.text2)}
            curr={curr === "2"}
          />
          <Button
            text={"Click me"}
            onSelect={() => handleClick(arr.text3)}
            curr={curr === "3"}
          />
          <Button
            text={"Click me"}
            onSelect={() => handleClick(arr.text4)}
            curr={curr === "4"}
          />
          <Button
            text={"Click me"}
            onSelect={() => handleClick(arr.text5)}
            curr={curr === "5"}
          />
          <Button
            text={"Click me"}
            onSelect={() => handleClick(arr.text6)}
            curr={curr === "6"}
          />
          <Button
            text={"Click me"}
            onSelect={() => handleClick(arr.text7)}
            curr={curr === "6"}
          />
          <Button
            text={"Click me"}
            onSelect={() => handleClick(arr.text8)}
            curr={curr === "6"}
          />
          <Button
            text={"Click me"}
            onSelect={() => handleClick(arr.text9)}
            curr={curr === "6"}
          />
        </section>
      </section>
    </>
  );
}
