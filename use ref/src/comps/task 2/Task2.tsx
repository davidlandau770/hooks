import { useRef, useState } from "react";
import TextBox from "../textBox/TextBox";

export default function Task2() {
    const textBox = useRef<HTMLInputElement>(null);
    const [value, setValue] = useState("");

    return (
        <div>
            <p>Task2: </p>
            <TextBox textBox={textBox} value={value} />
            <button onClick={() => setValue(textBox.current?.value || "")}>Show Value</button><br /><br />
        </div>
    )
}
