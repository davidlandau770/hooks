import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function UserGreeting() {
    const name = useContext(UserContext);

    return (
        <div>
            <p>UserGreeting:</p>
            <p>{name}</p>
        </div>
    )
}
