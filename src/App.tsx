import React from 'react';
import './App.css';
import Forms from './components/Forms';
import MapBox from './components/MapBox';

const App = () => {
	return (
		<div className="App row">
			<div className="column left">
				<Forms />
			</div>
			<div className="column right">
				<MapBox />
			</div>
		</div>
	);
};

export default App;
