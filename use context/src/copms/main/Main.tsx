import { useContext } from "react"
import { ChangeState } from "../context/StateContext"

export default function Main() {
    const obj = useContext(ChangeState)
    return (
        <main>
            <div className={obj?.state}>
                <p>hi</p>
            </div>
            <div className={obj?.state}>
                <p>hi</p>
            </div>
            <div className={obj?.state}>
                <p>hi</p>
            </div>
            <div className={obj?.state}>
                <p>hi</p>
            </div>
            <div className={obj?.state}>
                <p>hi</p>
            </div>
            <div className={obj?.state}>
                <p>hi</p>
            </div>
        </main>
    )
}
