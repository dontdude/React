import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

import APP from "./App"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
    <APP />
    </StrictMode>
);

//ReactDOM.render(<APP />, document.getElementById("root"));           Deprecated in React 18