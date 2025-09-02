import { useState } from "react";
import UserProfile from "../userProfile/UserProfile";
import { UserContext } from "../context/UserContext";
import UserGreeting from "../userGreeting/UserGreeting";


export default function App() {
    const [name] = useState("david");

    return (
        <div>
            <p>App:</p>
            <UserContext.Provider value={name}>
                <UserProfile />
                <UserGreeting />
            </UserContext.Provider>
        </div>
    )
}
