import { StrictMode } from "react";
import { Outlet } from "react-router-dom";
import Hearder from "./hearder";
import Footer from "./footer";
import Contactanos from "./contactanos";

const Basic = () => {
    return (
        <>
            <StrictMode>
                <Hearder /> 
                <div className="container">
                    <div className="row py-4">
                        <Outlet></Outlet>
                    </div>
                </div>
                <div><Contactanos/> </div>
                <div> <Footer /> </div>
            </StrictMode>
        </>
    );
}

export default Basic;