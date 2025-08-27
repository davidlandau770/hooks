import Button from "../button/Button";
import RandomBtn from "../randomBtn/RandomBtn";
import ResetBtn from "../resetBtn/ResetBtn";
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
                <Button mood="Happy 😉" countKey="Happy" setMood={setMood} list={list} setList={setList} count={count} setCount={setCount} />
                <Button mood="Happy 😣" countKey="Sad" setMood={setMood} list={list} setList={setList} count={count} setCount={setCount} />
                <Button mood="Angry 😡" countKey="Angry" setMood={setMood} list={list} setList={setList} count={count} setCount={setCount} />
            </div>
            <RandomBtn setMood={setMood} setList={setList} setCount={setCount} arr={arr} random={random} list={list} count={count} countRandom={countRandom} />
            <ResetBtn setMood={setMood} setList={setList} setCount={setCount}/>
            {/* <div className="singleDiv">
                <button className="button reset" onClick={() => {
                    setMood("Neutral");
                    setList([])
                    setCount({ "Happy": 0, "Sad": 0, "Angry": 0 })
                }}>reset</button>
            </div> */}
            <h3>Mood Counter</h3>
            <p>Happy: {count["Happy"]}</p>
            <p>Sad: {count["Sad"]}</p>
            <p>Angry: {count["Angry"]}</p>
            <h3>3 moods below</h3>
            <p className="p">{list.join(" || ")}</p>
        </>
    )
}
