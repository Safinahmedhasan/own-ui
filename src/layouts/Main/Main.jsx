import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div>
            <div>
               <Outlet/>
            </div>
        </div>
    );
};

export default Main;