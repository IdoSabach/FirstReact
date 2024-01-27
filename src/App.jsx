import Button from "./components/Button";
import Logo from "./assets/wallpaperflare.com_wallpaper (11).jpg";
import { useState } from "react";


export default function App() {
  const [currMain, setCurrMain] = useState();
  const [person , setPerson] = useState({name: 'ido' , age:23})
  const [value , setValue] = useState("")
  const [isSend , setIsSend] = useState(false)

  let send;
  if(isSend){
    return <h1>Your message is on its way!</h1>
  }

  const minus = () => {
    const newPerson = {name : ' ido the king ' , age :person.age -1}
    setPerson(newPerson)
  }

  const plus = () => {
    const newPerson = {...person , name : 'ido', age :person.age +1}
    setPerson(newPerson)
  }

  let text = <h1>pls enter on one section</h1>;

  if (currMain === 0) {
    text = (
      <div>
        <h1>Im Home section</h1>
      </div>
    );
  } else if (currMain === 1) {
    text = (
      <div>
        <h1>Im Menu section</h1>
      </div>
    );
  } else if (currMain === 2) {
    text = (
      <div>
        <h1>Im About section</h1>
      </div>
    );
  } else if (currMain === 3) {
    text = (
      <div>
        <h1>Im Contact section</h1>
      </div>
    );
  }
  const handlePrint = (id) => {
    setCurrMain(id);
    console.log(id);
  };

  return (
    <>
      <header id="header">
        <img src={Logo} alt="logo" className="imgLogo" />
        <div className="box-btn-head">
          <Button
            onPrint={handlePrint}
            text={"Home"}
            id={0}
            isActive={currMain === 0}
          />
          <Button
            onPrint={handlePrint}
            text={"Menu"}
            id={1}
            isActive={currMain === 1}
          />
          <Button
            onPrint={handlePrint}
            text={"About"}
            id={2}
            isActive={currMain === 2}
          />
          <Button
            onPrint={handlePrint}
            text={"Contact"}
            id={3}
            isActive={currMain === 3}
          />
        </div>
      </header>
      <main id="main">{text}</main>
      <section id="counter">
        <button onClick={minus}>-</button>
        <p>{person.age}</p>
        <p>{person.name}</p>
        <button onClick={plus}>+</button>
      </section>

      <section id="input">
        <label htmlFor="text">Enter Text</label>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
        <h1>{value}</h1>
      </section>

      <section id="big-input">
        <form onSubmit={(e) => {
          e.preventDefault()
          setIsSend(true)
        }}>
          <input type="text" />
          <button type="submit">send</button>
          <p>{send}</p>
        </form>
      </section>
    </>
  );
}
