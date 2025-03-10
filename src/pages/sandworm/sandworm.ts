/**
 * @fileoverview Provides functions which can be used by the Sandworm page creator.
 */

import { addInfoBullet, docByResearchteam, enableTextMarking, getWormAlbum, wikiCode } from "../../common";
import { globalElements, pageData } from "../../variables/objects";

/**
 * Assigns a dynamic name to the worm, based on the
 * planet or moon the worm is on.
 *
 * @function wormName
 * @returns {void}
 */
export function wormName() {
	const planet = pageData.planet as string;
	const moon = pageData.moon as string;

	/*
	 * If there's no planet, set pageData.name to an
	 * empty string and return.
	 */
	if (!planet) {
		pageData.name = '';
		return;
	}

	/*
	 * If there's a moon, set body to moon, otherwise set
	 * it to planet.
	 */
	const body = (() => {
		if (moon) return moon;
		return planet;
	})();

	/*
	 * Use the wikiCode function to generate wiki code
	 * for bodyName and set pageData.name to "Immortal
	 * Worm" plus body.
	 */
	wikiCode(body, 'bodyName');
	pageData.name = `Immortal Worm ${body}`;
}

/**
 * Sets the `autospawn` value according to the user input and updates the `globalEelements.output.autoSpawn` element to reflect changes.
 * @function
 * @name autoSpawn
 * @returns {void}
 */
// sets the autospawn value according to input
export function autoSpawn() {
	const spawn = (() => {
		const elements = globalElements.input.autoSpawn as Array<HTMLInputElement>;
		for (const element of Array.from(elements)) {
			if (element.checked) return element.value;
		}
		return '';
	})();
	const output = `This creature ${spawn} automatically spawn on game reload`;
	const outputElement = globalElements.output.autoSpawn as HTMLOutputElement;
	outputElement.style.display = spawn ? '' : 'none';
	if (spawn) outputElement.innerText = output;
	addInfoBullet();
}

/**
 * Adds a catalogue entry for the current page.
 * @function catalogue
 * @returns {void} No return value.
 * @description Adds information to the wikiCode for a specific album after checking the pageData's civShort value.
 *              If it's "GHub", it will add information to the "GHEC Sandworm Album".
 *              If it's "CalHub", it will add information to the "CalHub Rare Fauna Album#Sandworm" page.
 *              If it's "EisHub", it will add information to the "EisHub Shaihuluda Album" page.
 *              Also adds a "documented by GHEC" sentence to the output.
 */
export function catalogue() {
	const research = docByResearchteam('GHEC');

	const civShort = pageData.civShort as string;
	const album = getWormAlbum(civShort);

	const albumName = `${album} Album`;
	const output = `[[${albumName}]]${research}`;

	wikiCode(output, 'addInfo');
	addInfoBullet();
	pageData.catalogue = albumName
}

//album functions
export function albumItemTypeExternal() {
	const catalogue = pageData.catalogue as string;
	return catalogue.split('|').at(-1);
}

export function albumCivExternal() {
	return '';
}

export function albumNameExternal() {
	enableTextMarking();
	const { name, wormclass } = pageData;
	const output = `${name}|${wormclass}`;
	return output;
}

export function albumOtherExternal() {
	return `(${pageData.wormmaxdepth}ku)`;
}

export function albumLinkGen() {
	const catalogue = pageData.catalogue as string;
	return catalogue.split('|')[0];
}

/**
 * Generates an array of gallery items for the page
 * @function generateGalleryArray
 * @returns {Array} - An array of gallery items that are unique to the page
 */
export function generateGalleryArray() {
	const array = [
		'',
		'Worm scan',
		'Moon Page',
		'Planet Page',
		'System Page',
		'Galaxy Map'
	];

	if (!pageData.moon) {
		const index = array.findIndex(item => item.toLowerCase().includes('moon'));
		array.splice(index, 1);
	}

	pageData.galleryArray = array;
}