import { createBrowserRouter } from 'react-router-dom';

import Home from './pages/Home'
import WebDesign from './pages/WebDesign'
import AppDesign from './pages/AppDesign'
import GraphicDesign from './pages/GraphicDesign'
import About from './pages/About'
import Locations from './pages/Locations'
import Contact from './pages/Contact'
import LayoutGeral from './pages/Layouts/LayoutGeral'
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