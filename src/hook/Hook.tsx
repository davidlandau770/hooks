import "./hook.css"
import { useState } from "react"


export default function Hook() {
    const [mood, setMood] = useState("Neutral");
    const [list, setList] = useState<string[]>([]);
    const [count, setCount] = useState({ "Happy": 0, "Sad": 0, "Angry": 0 })
    const random = Math.floor(Math.random() * 3);
    const arr = ["Happy 😉", "Sad 😣", "Angry 😡"];
    const countRandom = arr[random].split(" ")[0] as "Happy" | "Sad" | "Angry";
    return (
        <>
            <h3>mood: {mood}</h3>
            <div className="hook">
                <button className="button" onClick={() => {
                    setMood("Happy 😉");
                    setList(list => list.length < 3 ? [...list, "Happy 😉"] : [...list.slice(-2), "Happy 😉"]);
                    setCount({ ...count, "Happy": count["Happy"] + 1 })
                }}>Change to Happy</button>
                <button className="button" onClick={() => {
                    setMood("Sad 😣");
                    setList(list => list.length < 3 ? [...list, "Sad 😣"] : [...list.slice(-2), "Sad 😣"]);
                    setCount({ ...count, "Sad": count["Sad"] + 1 })
                }}>Change to Sad</button>
                <button className="button" onClick={() => {
                    setMood("Angry 😡");
                    setList(list => list.length < 3 ? [...list, "Angry 😡"] : [...list.slice(-2), "Angry 😡"]);
                    setCount({ ...count, "Angry": count["Angry"] + 1 })
                }}>Change to Angry</button>
            </div>
            <div className="singleDiv">
                <button className="button random" onClick={() => {
                    setMood(arr[random]);
                    setList(list => list.length < 3 ? [...list, arr[random]] : [...list.slice(-2), arr[random]])
                    setCount({ ...count, [countRandom]: count[countRandom] + 1 })
                }}>choose random</button>
            </div>
            <div className="singleDiv">
                <button className="button reset" onClick={() => {
                    setMood("Neutral");
                    setList([])
                    setCount({ "Happy": 0, "Sad": 0, "Angry": 0 })
                }}>reset</button>
            </div>
            <h3>Mood Counter</h3>
            <p>Happy: {count["Happy"]}</p>
            <p>Sad: {count["Sad"]}</p>
            <p>Angry: {count["Angry"]}</p>
            <h3>3 moods below</h3>
            <p className="p">{...list}</p>
        </>
    )
}
