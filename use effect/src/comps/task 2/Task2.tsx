import { useEffect, useState } from "react";

export default function Task2() {
    const [print, setPrint] = useState(0);
    const [print2, setPrint2] = useState(0);
    
    useEffect(() => {
        console.log(print)
    }, [print])

    return (
        <div>
            <p>Task 2: </p>
            {/* רק הכפתור הראשון מדפיס לקונסול */}
            <p onClick={() => {setPrint(print + 1)}}>Hello Operator</p>
            <p onClick={() => {setPrint2(print2 + 1)}}>Hello Operator2</p>
        </div>
    )
}
