import Button from "./components/Button";
import {useState} from 'react'

export default function App() {
  const [curr , setCurr] = useState()
  const arr = {
    text1: "ido1",
    text2: "ido2",
    text3: "ido3",
    text4: "ido4",
    text5: "ido5",
    text6: "ido6",
  }

  function handleClick(name) {
    setCurr(name)
    console.log(name);
  }

  return (
    <>
      <section className="sectionOne">
        <Button text={"Click me"} onSelect={() => handleClick(arr.text1)} curr={curr === "ido1"}/>
        <Button text={"Click me"} onSelect={() => handleClick(arr.text2)} curr={curr === "ido2"}/>
        <Button text={"Click me"} onSelect={() => handleClick(arr.text3)} curr={curr === "ido3"}/>
        <Button text={"Click me"} onSelect={() => handleClick(arr.text4)} curr={curr === "ido4"}/>
        <Button text={"Click me"} onSelect={() => handleClick(arr.text5)} curr={curr === "ido5"}/>
        <Button text={"Click me"} onSelect={() => handleClick(arr.text6)} curr={curr === "ido6"}/>
      </section>
    </>
  );
}
