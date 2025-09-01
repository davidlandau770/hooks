import { useEffect, useState } from "react"

export default function Task5() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [print, setPrint] = useState("");

    useEffect(() => {
        if (firstName || lastName) {
            console.log(`firstName: ${firstName}, lastName: ${lastName}`);
            setPrint(`firstName: ${firstName}, lastName: ${lastName}`);
        }
        else {
            setPrint("");
        }
    }, [firstName, lastName])
  return (
    <div>
        <p>Task5: </p>
        <input onChange={(e) => setFirstName(e.target.value)} placeholder="first name"></input>
        <input onChange={(e) => setLastName(e.target.value)} placeholder="last name"></input>
        {print}
    </div>
  )
}
