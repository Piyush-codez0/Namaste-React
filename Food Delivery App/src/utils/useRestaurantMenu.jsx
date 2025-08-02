import { useEffect, useState } from "react";
import { RES_API } from "./constants";

const useRestaurantMenu = (resId) => {
    const [menuData, setMenuData] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(RES_API + resId);
        const json = await data.json();
        const resData = json.data;
        setMenuData(resData);
    };

    return menuData;
};

export default useRestaurantMenu;