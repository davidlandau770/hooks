import { useEffect, useState } from "react";

export default function Task3() {
    interface Cat {
        id: number,
        url: string,
        width: number
        height: number,
    }

    const [get, setGet] = useState<Cat[]>([]);

    useEffect(() => {
        let response
        const getFromAPI = async () => {
            response = await fetch("https://api.thecatapi.com/v1/images/search");
            // setGet(response.text())
            setGet(await response.json())
        }

        getFromAPI()
    }, [])

    return (
        <div className="block">
            <p className="title">Task 3: </p>
            <div>{get.map((item) => (
                <div key={item.id}>
                    <p>id: {item.id}</p>
                    <p>url: {item.url}</p>
                    <p>width: {item.width}</p>
                    <p>height: {item.height}</p>
                </div>
            ))}</div>
        </div>
    )
}
