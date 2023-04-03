
function getPosition()
{
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject, { enableHighAccuracy: true });
    });
}

export async function getPositionString() : Promise<String | null>
{
    const position = await getPosition()

    if (!position) return null
    // @ts-ignore
    const {longitude, latitude} = position.coords;
    return`${latitude},${longitude}`
}

