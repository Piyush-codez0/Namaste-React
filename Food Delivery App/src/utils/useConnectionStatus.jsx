import { useEffect, useState } from "react";


const useConnectionStatus = () => {


    const [status, setStatus] = useState(true);

    useEffect( () => {
        window.addEventListener("online", () => {
            setStatus(true); //when user is online, update the state variable with true.
        });

        window.addEventListener("offline", () => {
            setStatus(false);
        });

    }, []);
    return status;
}

export default useConnectionStatus;