import { useRef, useState } from "react"

export default function Task5() {
    const [num, setNum] = useState<number>(0);
    const count = useRef<number>(0);

    return (
        <div>
            <p>task5: </p>
            <button onClick={() => count.current++}>Click Me</button>
            <button onClick={() => setNum(count.current)}>Show Total Clicks.</button>
            {num}
        </div>
    )
}
