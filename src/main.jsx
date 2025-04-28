import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import AnimeDetail from './components/AnimeDetail.jsx';
import './index.css';
import 'antd/dist/reset.css';
import SearchAnimePage from "./components/UI/SearchAnimePage.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/anime/:id',
        element: <AnimeDetail />,
    },
    {
        path: '/search',
        element: <SearchAnimePage />,
    },
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
