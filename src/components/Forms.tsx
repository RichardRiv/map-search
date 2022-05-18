import React, { useState } from 'react';
import { searchAddressHandler } from '../apis/Gmaps';

const Forms = () => {
	const [term, setTerm] = useState('');

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<div>
			<form className="form-group" onSubmit={handleSubmit}>
				<input
					type="text"
					id="address"
					placeholder="Search Address"
					onChange={(e) => setTerm((e.target as HTMLInputElement).value)}
				/>
				<button type="submit" onClick={searchAddressHandler}>
					Search!
				</button>
			</form>
		</div>
	);
};

export default Forms;
