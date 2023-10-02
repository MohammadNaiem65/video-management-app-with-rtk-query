import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './shared/Footer/Footer';
import Navbar from './shared/Navbar/Navbar';
function App() {
	return (
		<div className='m-0'>
			<Navbar />
			<Outlet />
			<Footer />
		</div>
	);
}

export default App;
