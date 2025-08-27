import Button from "../button/Button";
import RandomBtn from "../randomBtn/RandomBtn";
import ResetBtn from "../resetBtn/ResetBtn";

export default function Buttons({setMood, setList, setCount, list, count, arr, random, countRandom}: any) {
    return (
        <>
            <div className="hook">
                <Button mood="Happy 😉" countKey="Happy" setMood={setMood} list={list} setList={setList} count={count} setCount={setCount} />
                <Button mood="Happy 😣" countKey="Sad" setMood={setMood} list={list} setList={setList} count={count} setCount={setCount} />
                <Button mood="Angry 😡" countKey="Angry" setMood={setMood} list={list} setList={setList} count={count} setCount={setCount} />
            </div>
            <RandomBtn setMood={setMood} setList={setList} setCount={setCount} arr={arr} random={random} list={list} count={count} countRandom={countRandom} />
            <ResetBtn setMood={setMood} setList={setList} setCount={setCount} />
        </>
    )
}
