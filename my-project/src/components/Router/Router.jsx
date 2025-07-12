import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../MainLayout/Mainlayout";

const routes= createBrowserRouter([
    {
        path:'/',
        element:<Mainlayout></Mainlayout>,
    }

]);

export default routes;