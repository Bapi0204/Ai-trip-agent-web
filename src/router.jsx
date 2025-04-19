import { createBrowserRouter } from "react-router";
import App from "./App";
import CreateTrip from "./create-trip/index";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Viewtrip from "./view-trip/[tripId]";
import MyTrips from "./my-trips";
export const router = createBrowserRouter([
    {
        path:'/',
        Component:App, //as a layout
    },
    
    {
        path:"create-trip",
        Component:CreateTrip
    },
    {
        path:'/view-trip/:tripId',
        Component:Viewtrip
    },
    {
        path:'/my-trips',
        Component:MyTrips
    }        
    
])