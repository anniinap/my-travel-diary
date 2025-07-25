import { createMap, getMap } from "./js/map.js";
import { findPlace} from "./js/search.js";


// tapahtumankuuntelija paikanhaku formille
const searchForm = document.getElementById("search-form");
searchForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const map = getMap();
  await findPlace(map);
});


// kutsutaan funkiota joka renderöi kartan ensimmäisen kerran
createMap();


