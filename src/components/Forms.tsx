import React from 'react';
import { searchAddressHandler } from '../apis/Gmaps';

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
	e.preventDefault();
};

const Forms = () => {
	return (
		<div>
			<form className="form-group" onSubmit={handleSubmit}>
				<input type="text" id="address" placeholder="Search Address" />
				<button type="submit" onClick={searchAddressHandler}>
					Search!
				</button>
			</form>
		</div>
	);
};

export default Forms;
