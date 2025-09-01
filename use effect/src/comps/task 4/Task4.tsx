import { useEffect, useState } from "react"

export default function Task4() {
    const [count, setCount] = useState(0);
    const [render, setRender] = useState(0);

    useEffect(() => {
        const result = setInterval(() => {
            setCount(count + 1);
        }, 1000)

        return () => {
            clearInterval(result)
        }
    }, [count])


    return (
        <div className="block">
            <p className="title">Task 4: </p>
            <div className="divBtn">
                <p>{count}</p>
                <button onClick={() => setRender(render + 1)}>render</button>
            </div>
        </div>
    )
}
