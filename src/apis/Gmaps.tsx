import axios from 'axios';

declare var google: any;

export const searchAddressHandler = async () => {
	const addressInput = document.getElementById('address')! as HTMLInputElement;

	const GOOGLE_API_KEY = 'AIzaSyAoxIPsrmzVltncjD-unHrTxVgImTJXxL4';

	type GoogleGeocodingResponse = {
		results: { geometry: { location: { lat: number; lng: number } } }[];
		status: 'OK' | 'ZERO_RESULTS';
	};

	const enteredAddress = addressInput.value;

	try {
		const res = await axios.get<GoogleGeocodingResponse>(
			`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
				enteredAddress
			)}&key=${GOOGLE_API_KEY}`
		);

		if (res.data.status !== 'OK') {
			throw new Error('Could not fetch location! Try a different address!');
		}

		const coordinates = res.data.results[0].geometry.location;
		const map = new google.maps.Map(document.getElementById('map'), {
			center: coordinates,
			zoom: 16,
		});

		new google.maps.Marker({ position: coordinates, map: map });
	} catch (err: any) {
		alert(err.message);
		console.log(err);
	}
};

// form.addEventListener('submit', searchAddressHandler);
