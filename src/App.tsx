import { Route, Routes } from 'react-router-dom';
import './App.css';
import Service from './components/Service/Service';
import Services from './components/Services/Services';

function App() {
	return (
		<>
			<Routes>
				<Route path='/' index element={<Services />} />
				<Route path='/services/:id' element={<Service />} />
			</Routes>
		</>
	);
}

export default App;
