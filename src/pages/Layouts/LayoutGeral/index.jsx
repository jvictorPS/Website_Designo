import { Outlet } from "react-router-dom";
import Header from "../../../components/organism/Header";
import Footer from "../../../components/organism/Footer";


export default function LayoutGeral() {
    return (
        <>
            <Header />
                <Outlet />
            <Footer />   
        </>
    )
}