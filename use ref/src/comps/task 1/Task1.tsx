import { useRef, useState } from "react"

export default function Task1() {
    const resetInput = useRef<HTMLInputElement>(null);
    const [res, setRes] = useState("");

    const reset = () => {
        if (resetInput.current) {
            resetInput.current.value = "";
        }
        setRes("");
    }
    return (
        <div>
            <p>Task1: </p>
            <input ref={resetInput} type="text" onChange={(e) => setRes(e.target.value)} value={res} />
            <button onClick={reset}>Clear Input</button>
            <br /><br />
        </div>
    )
}
