import { saveTravelLog } from "./saveTravelLog.js";

export async function createInfoWindow(marker, map) {

    // ladataan InfoWindow-luokka 
    const { InfoWindow } = await google.maps.importLibrary("maps");
    // luodaan uusi instanssi 
    const infoWindow = new InfoWindow();

    // luodaan infoWindow  oletus sisältö HTML elementtinä
    const defaultContent = document.createElement("div");
    defaultContent.innerHTML = `
    <div style="color: #333; font-size: 14px; padding: 10px; max-width: 300px;">
        <button id="addButton" class="btn btn-primary">Lisää merkintä</button>
        <button id="deleteButton" class="btn btn-primary">Poista</button>
    </div>
    `;

    // haetaan viittaukset napeille
    const addButton = defaultContent.querySelector("#addButton");
    const removeButton = defaultContent.querySelector("#deleteButton");

    // tallenetaan oletus sisältö infoWindowin
    infoWindow.latestContent = defaultContent;

    // luodaan addButtonille eventListener, kun käyttäjä painaa nappia, avataan lomake uuden merkinnän lisäämistä varten
    addButton.addEventListener("click", () => {
        // tyhjät oletusarvot
        const title = "";
        const date = "";
        const text = "";

        // Luodaan lomake ja as