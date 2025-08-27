import "./button.css";

export default function Button({ mood, countKey, setMood, setList, count, setCount, list }: any) {
    return (
        <>
            <button className="button" onClick={() => {
                setMood(`${mood}`);
                setList([...list, mood].slice(-3))
                setCount({ ...count, [countKey]: count[countKey] + 1 });
            }}>
                Change to {countKey}
            </button>
        </>
    )
}
