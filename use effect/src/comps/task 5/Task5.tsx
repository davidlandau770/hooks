import { useEffect, useState } from "react"

export default function Task5() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [fullName, setFullName] = useState("");

    useEffect(() => {
        if (firstName || lastName) {
            console.log(`full name: ${firstName} ${lastName}`);
            setFullName(`full name: ${firstName} ${lastName}`);
        }
        else {
            setFullName("");
        }
    }, [firstName, lastName])
  return (
    <div className="block">
        <p className="title">Task 5: </p>
        <div className="divInput">
            <input onChange={(e) => setFirstName(e.target.value)} placeholder="first name"></input>
            <input onChange={(e) => setLastName(e.target.value)} placeholder="last name"></input>
        </div>
        <p className="fullName">{fullName}</p>
    </div>
  )
}
