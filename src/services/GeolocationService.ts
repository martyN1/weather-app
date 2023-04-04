function getPosition(): Promise<GeolocationPosition> {
	return new Promise(function (resolve, reject) {
		navigator.geolocation.getCurrentPosition(resolve, reject, { enableHighAccuracy: true });
	});
}

export async function getPositionString(): Promise<string | null> {
	const position = await getPosition();

	if (!position) return null;

	const { longitude, latitude } = position.coords;
	return `${latitude},${longitude}`;
}
