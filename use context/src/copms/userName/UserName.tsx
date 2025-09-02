import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function UserName() {
    const name = useContext(UserContext);

    return (
        <div>
            <p>UserName:</p>
            <p>hello {name}!</p>
        </div>
    )
}
