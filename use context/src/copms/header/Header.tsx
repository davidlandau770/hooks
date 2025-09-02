import { useContext } from "react"
import { ChangeState } from "../context/StateContext"

export default function Header() {
  const obj = useContext(ChangeState);
  return (
    <div>
      <header>
        <h1>Welcome</h1>
        <button onClick={() => obj?.setState(obj?.state === "light" ? "dark" : "light")}>Change state</button>
      </header >
    </div>
  )
}
