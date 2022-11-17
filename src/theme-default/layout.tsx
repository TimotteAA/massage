import React, { useState } from "react";

const Layout = () => {
    const [counter, setCounter] = useState(0);
    return <div>
        <h2>默认内容...</h2>
        <div>{counter}</div>
        <button onClick={() => setCounter(counter + 1)}>+1</button>
    </div>
}

export default Layout;
