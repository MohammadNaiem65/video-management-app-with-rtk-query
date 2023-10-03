import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App.jsx';
import Home from './pages/Home/Home.jsx';
import Video from './pages/Video/Video.jsx';
import AddVideo from './pages/AddVideo/AddVideo.jsx';
import './index.css';
import store from './app/store.js';
import EditVideo from './pages/EditVideo/EditVideo.jsx';

const routes = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/video/:id',
				element: <Video />,
			},
			{
				path: '/addVideo',
				element: <AddVideo />,
			},
			{
				path: '/editVideo/:id',
				element: <EditVideo />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={routes} />
		</Provider>
	</React.StrictMode>
);
