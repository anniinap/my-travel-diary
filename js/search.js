export async function findPlace(map){
    const { Place } = await google.maps.importLibrary("places");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
    const place = document.getElementById("place");

    if (!place.value) return;

    const request = {
        textQuery: place.value,
        fields: ['displayName', 'location'],
        language: 'fi',
        maxResultCount: 8,
    };

    const { places } = await Place.searchByText(request);
    place.value = "";

    if (places.length > 0) {
        const location = places[0].Dg.location;

        console.log(location)
        const marker = new AdvancedMarkerElement({
            map,
            position: {
                lat: location.lat,
                lng: location.lng,
            }
        });

        map.setCenter({ lat: location.lat, lng: location.lng });
        map.setZoom(10);

        // tästä jatketaan että kun markeri ilmestyy kartaan se pitää ensinnäkin ensin tallentaa localstorageen ja sitten sille pitää luoda
        // popup ikkuna jossa voi täyttää markerin tiedot ja tämän jälkeen tallentaa markeriin jotta käyttäjä voi lukea niitä
        marker.addEventListener("click", () => {
            alert("klikattu");
        })
    }

}

