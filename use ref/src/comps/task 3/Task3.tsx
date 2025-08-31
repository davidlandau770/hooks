import { useRef, useState } from "react"

export default function Task3() {
    const [saveCount, setSaveCount] = useState(0);
    const previous = useRef(0);

    const plus = () => {
        previous.current = saveCount
        setSaveCount(saveCount + 1)
    }

    const minus = () => {
        previous.current = saveCount
        setSaveCount(saveCount - 1)
    }

    return (
        <>
            <p>Task3: </p>
            <button onClick={plus}>+1</button>
            <button onClick={minus}>-1</button>
            <p>Current: {saveCount} (Previous: {previous.current})</p><br />
        </>
    )
}
