import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import HomePage from './pages/Home';
import AlbumPage from './pages/Album';

const router = createBrowserRouter([
    {path: '/', element: <HomePage />},
    {path: '/album', element: <AlbumPage />}
]);

function App2() {
    return <RouterProvider router={router} />
}

export default App2;