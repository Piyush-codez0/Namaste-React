const parent = React.createElement(
    "div",
    {id: "parent"}, [
        React.createElement("div", {id: "child1"}, [
            React.createElement("h1",{}, "I'm h1 tag!"),
            React.createElement("h2", {}, "I'm h2 tag!")
    ]),
        React.createElement("div", {id: "child2"}, [
            React.createElement("h1",{}, "I'm h1 tag!"),
            React.createElement("h2", {}, "I'm h2 tag!")
    ])
]

)

const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the heading element into the root
root.render(parent);
