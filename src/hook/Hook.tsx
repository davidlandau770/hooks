import Buttons from "../buttons/Buttons";
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
            <Buttons setMood={setMood} setList={setList} setCount={setCount} list={list} count={count} arr={arr} random={random} countRandom={countRandom}/>
            <h3>Mood Counter</h3>
            <p>Happy: {count["Happy"]}</p>
            <p>Sad: {count["Sad"]}</p>
            <p>Angry: {count["Angry"]}</p>
            <h3>3 moods below</h3>
            <p className="p">{list.join(" || ")}</p>
        </>
    )
}
