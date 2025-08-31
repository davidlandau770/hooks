export default function RandomBtn({setMood, setList, setCount, arr, random, list, count, countRandom}: any) {
    return (
        <div className="singleDiv">
            <button className="button random" onClick={() => {
                setMood(arr[random]);
                setList([...list, arr[random]].slice(-3))
                setCount({ ...count, [countRandom]: count[countRandom] + 1 })
            }}>choose random</button>
        </div>
    )
}
