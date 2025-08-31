import { useState } from "react"
import "./miniPoll.css"

export default function MiniPoll() {
    const [arr, setArr] = useState(["React", "Vue", "Svelte"]);
    const [votes, setVotes]: any = useState({ "React": 0, "Vue": 0, "Svelte": 0 })
    const [showResults, setShowResults] = useState(true);
    const [textInput, setTextInput] = useState("");
    const [notes, setNotes] = useState("")
    const items = Object.keys(votes).map((key) => [key, votes[key]]);
    items.sort((a, b) => b[1] - a[1]);


    return (
        <div className="miniPoll">
            <div className="carrier">
                {(showResults && items[0][1]) ? <h3>The carrier is:</h3> : <h3>Welcome</h3>}
                {(showResults && items[0][1]) ? (items[0][1] == items[1][1] ? "It's a tie!" : items[0][0]) : ""}
            </div>
            <ul className="ul">
                {arr.map((li) => (
                    <div key={li} className="votes">
                        <li><b>{li}</b></li>
                        <button className="buttons" onClick={() => setVotes({ ...votes, [li]: votes[li] + 1 })}>vote</button>
                        <p>{showResults && <span>amount: <b>{votes[li]}</b></span>}</p>
                    </div>
                ))}
                <button className="toggleBtn" onClick={() => setShowResults(!showResults)}>Toggle Results</button>

                <div className="newOption">
                    <h3 className="h3">add new option</h3>
                    <input className="input" placeholder="Enter option" value={textInput} onChange={(e) => setTextInput(e.target.value)} />
                    <button className="btnInput" onClick={() => {
                        textInput && !(textInput in votes) && setArr([...arr, textInput])
                        textInput && !(textInput in votes) && setVotes({ ...votes, [textInput]: 0 })
                        textInput && !(textInput in votes) && setNotes("")
                        textInput && (textInput in votes) && setNotes("name is already exists.");
                        !textInput && setNotes("Please enter a name.");
                    }}>add new option</button>
                </div>
                <div className="notes">
                    {notes}
                </div>
                <button className="reset" onClick={() => {
                    const reset: { [key: string]: number } = {};
                    for (const li in votes) {
                        reset[li] = 0
                    }
                    setVotes(reset)
                }} >reset</button>
            </ul>
        </div>
    )
}
