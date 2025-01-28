import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import HomePage from './pages/Home';
import AlbumPage from './pages/Album';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import EvenimentePage from './pages/Evenimente';
import RootLayout from './Root';
import SedintaFoto from './pages/Sedinta';
import DiversePage from './pages/Diverse';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {path: '/', element: <HomePage />},
            {path: '/album', element: <AlbumPage />},
            {path: '/album/evenimente', element: <EvenimentePage />},
            {path: '/album/sedinta', element: <SedintaFoto />},
            {path: '/album/diverse', element: <DiversePage />},
            {path: '/about', element: <AboutPage />},
            {path: '/contact', element: <ContactPage />}
        ]
    }
]);

function App3() {
    return <RouterProvider router={router} />
}

export default App3;