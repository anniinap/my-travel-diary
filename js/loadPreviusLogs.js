import { createDiaryContent } from "./infoWindow.js";
import { createMarker } from "./marker.js";

// ladataan aikaisemmin localStorageen lisätyt paikkamerkinnät kartalle
export function loadPreviousLogs(map) {