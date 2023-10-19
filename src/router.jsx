import { createBrowserRouter } from 'react-router-dom';

import Home from './pages/Home/index'
import WebDesign from './pages/WebDesign/index'
import AppDesign from './pages/AppDesign/index'
import GraphicDesign from './pages/GraphicDesign/index'
import About from './pages/About/index'
import Locations from './pages/Locations/index'
import Contact from './pages/Contact/index'
import LayoutGeral from './pages/Layouts/LayoutGeral/index'
// import LayoutContact from './pages/Layouts/LayoutContact'


const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutGeral />,
        children: 
        [
        {
            index: true,
            element: <Home />
        },
        {
            path: 'WebDesign',
            element: <WebDesign />,
        },
        {
            path: 'AppDesign',
            element: <AppDesign />,
        },
        {
            path: 'GraphicDesign',
            element: <GraphicDesign />,
        }, 
        {
            path: 'About',
            element: <About />,
        },
        {
            path: 'Locations',
            element: <Locations />,
        }
        ],
    },

    {
        path: '/Contact',
        element: <Contact />,
    }
])

export default router