import { useRef, useState } from "react";

export default function Task4() {
    const [timer, setTimer] = useState(0);
    const [disabled, setDisabled] = useState(false);
    const idInterval = useRef<number | undefined>(null);

    const startTimer = () => {
        if (!idInterval.current) {
            idInterval.current = setInterval(() => {
                setTimer(prev => prev + 1);
            }, 1000);
            setDisabled(true);
        }
    }
    
    const stopTimer = () => {
        if (idInterval.current)
            clearInterval(idInterval.current);
        idInterval.current = undefined;
        setDisabled(false);
    }

    return (
        <div>
            <p>Task4: </p>
            <label>{timer}</label>
            <button disabled={disabled} onClick={startTimer}>start</button>
            <button disabled={!disabled} onClick={stopTimer}>stop</button><br /><br />
        </div>
    )
}
