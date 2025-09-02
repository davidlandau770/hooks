import { useContext } from "react"
import { ChangeState } from "../context/StateContext"

export default function Footer() {
  const obj = useContext(ChangeState);
  return (
    <div>
      <footer>
        <p>Theme: {obj?.state}</p>
      </footer>
    </div>
  )
}
