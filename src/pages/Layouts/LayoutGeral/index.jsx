import { Outlet } from "react-router-dom";
import Header from "../../../components/molecules/Header";


export default function LayoutGeral() {
    
    return (

        <>
        <Header />
            <Outlet />
        <footer> Rodapé </footer>
        
        </>
    )
}