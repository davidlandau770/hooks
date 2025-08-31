export default function ResetBtn({setMood, setList, setCount}: any) {
    return (
        <div className="singleDiv">
            <button className="button reset" onClick={() => {
                setMood("Neutral");
                setList([])
                setCount({ "Happy": 0, "Sad": 0, "Angry": 0 })
            }}>reset</button>
        </div>

    )
}
