import { useEffect, useState } from "react"

export default function Task1() {
    const [print, setPrint] = useState(0);
    
    useEffect(() => {
        console.log("Mounted")
    }, [])

    return (
        <div>
            <p>Task 1: </p>
            <p onClick={() => {setPrint(print + 1)}}>Hello Operator</p>
        </div>
    )
}
