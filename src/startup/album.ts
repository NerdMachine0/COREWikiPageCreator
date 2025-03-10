import { addDomAsElement, addStaticPageData } from "../common";
import { assignElementFunctions } from "../commonElements/elementBackend/elementFunctions";
import { updateGlobalElements } from "../commonElements/elementBackend/elementStore";
import wikitext from "../htmlSnippets/album.html?raw";
import { actionsDom, albumCiv } from "../modules/albumactions";
import { ElementFunctions } from "../types/elements";
import { globalElements } from "../variables/objects";

const albumElements = {
	output: {
		albumCiv: 'albumCiv',
		album: 'album',
		albumType: 'albumType',
		albumHeaderName: 'albumHeaderName',
		albumImage: 'albumImage',
		albumName: 'albumName',
		albumOther: 'albumOther',
		albumGlyphs: 'albumGlyphs',
		albumDiscoverer: 'albumDiscoverer',
		albumText: 'albumText',
		albumDesc: 'albumDesc'
	}
}

const albumEntry = globalElements.output.albumEntry as HTMLDivElement;
const albumActions = globalElements.output.albumActions as HTMLDivElement;

// If the global albumEntry element exists, set its innerHTML to the wikitext.
if (albumEntry) albumEntry.innerHTML = wikitext;

// If the global albumActions element exists, set its innerHTML to the actions.
if (albumActions) {
	addDomAsElement(actionsDom, albumActions, 'afterbegin');

	// Update the global albumElements with their respective IDs.
	updateGlobalElements(albumElements);

	const albumElementFunctions: ElementFunctions = [
		{
			element: 'civ',
			func: () => albumCiv()
		}
	]
	// Assign albumElementFunctions to their respective HTML elements.
	assignElementFunctions(albumElementFunctions);

	// Dispatches the albumLoaded event to notify that the album is ready.
	document.dispatchEvent(new Event('albumLoaded'));

	/**
	 * Boolean flag indicating that the album has been initialised.
	 * @type {boolean}
	 */
	addStaticPageData('albumInitialised', true);

	const albumNote = `<p style="width:100%" class="has-text-centered mb-3">Please don't forget to create an album entry!</p>`;
	albumActions.insertAdjacentHTML('afterbegin', albumNote);
}