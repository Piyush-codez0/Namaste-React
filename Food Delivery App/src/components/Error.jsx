import { useRouteError } from "react-router-dom";

const Error = () => {

    const err = useRouteError();    // It gives us more info about the Error, in form of a object.
    console.log(err);

    return(
        <div>
            <h1>OOPS!!! </h1>
            <h2>Something went wrong...</h2>
            <h4 style={{color: "Red"}} >{err.status} : {err.statusText} </h4>
        </div>
    )
}

export default Error;