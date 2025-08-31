import { useEffect, useState } from "react";

export default function Task3() {
    // interface Cat {
    //     height: number,
    //     id: number,
    //     url: string,
    //     width: number
    // }

    const [get, setGet] = useState<Promise<string>>();

    useEffect(() => {
        let response
        const getFromAPI = async () => {
            response = await fetch("https://api.thecatapi.com/v1/images/search");
            setGet(response.text())
            // setGet(data);
        }

        getFromAPI()
    }, [])

    return (
        <>
            <p>Task 3: </p>
            <p>{get}</p>
            {/* <div>{get.map((item) => (
                <div key={item.id}>
                    <p>height: {item.height}</p>
                    <p>id: {item.id}</p>
                    <p>url: {item.url}</p>
                    <p>width: {item.width}</p>
                </div>
            ))}</div> */}
        </>
    )
}
