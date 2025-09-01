import { useEffect, useState } from "react"

export default function Task1() {
    const [print, setPrint] = useState(0);
    
    useEffect(() => {
        console.log("Mounted")
    }, [])

    return (
        <div className="block">
            <p className="title">Task 1: </p>
            <p className="pCount" onClick={() => {setPrint(print + 1)}}>Hello Operator</p>
        </div>
    )
}
