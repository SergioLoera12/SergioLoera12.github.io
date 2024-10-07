let map;

async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");

    map = new Map(document.getElementById("map"), {
        center: { lat: 21.81428552567272, lng: -102.76898188728283 },
        zoom: 15,
    });
}

initMap();
/* 21.81428552567272, -102.76898188728283 */