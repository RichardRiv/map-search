import React from 'react';
import './App.css';
import Forms from './components/Forms';
import MapBox from './components/MapBox';
import { ThemeContext, themes } from './contexts/ThemeContext';

const App = () => {
	const [darkMode, setDarkMode] = React.useState(true);

	return (
		<div className="App row">
			<div className="column left">
				<Forms />
			</div>
			<div className="column right">
				<MapBox />
			</div>

			<h1 className="text-warning">Dark/Light mode</h1>
			<div>
				<ThemeContext.Consumer>
					{({ changeTheme }) => (
						<button
							color="link"
							onClick={() => {
								setDarkMode(!darkMode);
								changeTheme(darkMode ? themes.light : themes.dark);
							}}
						>
							<i className={darkMode ? 'LIGHT' : 'DARK'}></i>
							<span className="d-lg-none d-md-block">Switch mode</span>
						</button>
					)}
				</ThemeContext.Consumer>
			</div>
		</div>
	);
};

export default App;
