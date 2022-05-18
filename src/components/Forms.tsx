import React, { useState } from 'react';
import { searchAddressHandler } from '../apis/Gmaps';

const Forms = () => {
	const [term, setTerm] = useState('');

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	const handleChange = (e: React.FormEvent<HTMLFormElement>) => {
		setTerm((e.target as HTMLInputElement).value);
	};

	return (
		<div>
			<form className="form-group" onSubmit={handleSubmit}>
				<input
					type="text"
					id="address"
					placeholder="Search Address"
					onChange={handleChange}
				/>
				<button type="submit" onClick={searchAddressHandler}>
					Search!
				</button>
			</form>
		</div>
	);
};

export default Forms;
