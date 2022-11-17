import { createRoot } from "react-dom/client";
import App from "./App";

function renderInBrowser() {
    const root = createRoot(document.getElementById("root"))!;
    root.render(<App />);
}
console.log(12345);
renderInBrowser();
