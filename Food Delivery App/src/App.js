import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const App = () => (
    <div>
        <Header />
        <Body />
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>);