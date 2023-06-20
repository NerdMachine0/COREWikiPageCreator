import { addHuburbs } from "../common";
import { Region, Regions } from "../types/regions"
import { pageData } from "./objects";

/**
 * An object representing discovery regions and their associated systems.
 * @typedef {Object} RegionsObject
 * @property {Object} GHub - The Galactic Hub Project.
 * @property {Object} CalHub - The Galactic Hub Calypso.
 * @property {Object} EisHub - The Galactic Hub Eissentam.
 * @property {Object.<string, string>} GHub - The systems in the Galactic Hub Project, indexed by their Glyphs.
 * @property {Object.<string, string>} CalHub - The systems in the Galactic Hub Calypso, indexed by their Glyphs.
 * @property {Object.<string, string>} EisHub - The systems in the Galactic Hub Eissentam, indexed by their Glyphs.
 * @example
 * const regions = {
 *    GHub: {
 *        F9556C30: 'The Arm of Vezitinen',
 *        F9555C30: 'Canthian',
 *        F9555C31: 'Dexterf Sector',
 *        F9556C31: 'The Arm of Katteus',
 *        ...
 *    },
 *    CalHub: {
 *        F9556C30: 'Uisaor Spur',
 *        F9555C30: 'The Arm of Kiffeyn',
 *        F9555C31: 'Ilongl Cloud',
 *        F9556C31: 'The Arm of Taticale',
 *        ...
 *    },
 *    EisHub: {
 *        F9556C30: 'Riwala',
 *        F9555C30: 'Omskio Instability',
 *        F9555C31: 'Marcki',
 *        F9556C31: 'Anolamga Spur',
 *        ...
 *    }
 * };
 */
export const regions: Regions = {
	ZikCORE: {
		'8191A403': 'Gegvirtam Conflux',
		'8191A404': 'Snatyr Conflux',
		'8191A405': 'Caquoian Anomaly',
		'8191B403': 'Sea of Afkaro',
		'8191B404': 'Ajdaribu',
		'8191B405': 'Bujunaiva',
		'8191C402': 'Dayleri Spur',
		'8191C403': 'Ictore Cluster',
		'8191C404': 'Foskogi Spur',
		'8191C405': 'Yodamquixi Spur',
		'8191C406': 'The Arm of Ramsit',
		'8191D403': 'Cuyberg',
		'8191D404': 'Iduniaiu',
		'8191D405': 'Retlamh Expanse',
		'8291A403': 'Alpbac Spur',
		'8291A404': 'Buongan Instability',
		'8291A405': 'Mohant Adjunct',
		'8291B403': 'Wechka',
		'8291B404': 'Ocrims Terminus',
		'8291B405': 'Buhiloper Fringe',
		'8291C403': 'Syaphoba Sector',
		'8291C404': 'Vajrap',
		'8291C405': 'Cezykin Expanse',
		'8291D404': 'Logoandh',
		'8391C404': 'Thewson Boundary',
	},
	BroomCORE: {
		'8191A403': 'Gegvirtam Conflux',
		'8191A404': 'Snatyr Conflux',
		'8191A405': 'Caquoian Anomaly',
		'8191B403': 'Sea of Afkaro',
		'8191B404': 'Ajdaribu',
		'8191B405': 'Bujunaiva',
		'8191C402': 'Dayleri Spur',
		'8191C403': 'Ictore Cluster',
		'8191C404': 'Foskogi Spur',
		'8191C405': 'Yodamquixi Spur',
		'8191C406': 'The Arm of Ramsit',
		'8191D403': 'Cuyberg',
		'8191D404': 'Iduniaiu',
		'8191D405': 'Retlamh Expanse',
		'8291A403': 'Alpbac Spur',
		'8291A404': 'Buongan Instability',
		'8291A405': 'Mohant Adjunct',
		'8291B403': 'Wechka',
		'8291B404': 'Ocrims Terminus',
		'8291B405': 'Buhiloper Fringe',
		'8291C403': 'Syaphoba Sector',
		'8291C404': 'Vajrap',
		'8291C405': 'Cezykin Expanse',
		'8291D404': 'Logoandh',
		'8391C404': 'Thewson Boundary',
	},
	SezCORE: {
		'8191A403': 'Gegvirtam Conflux',
		'8191A404': 'Snatyr Conflux',
		'8191A405': 'Caquoian Anomaly',
		'8191B403': 'Sea of Afkaro',
		'8191B404': 'Ajdaribu',
		'8191B405': 'Bujunaiva',
		'8191C402': 'Dayleri Spur',
		'8191C403': 'Ictore Cluster',
		'8191C404': 'Foskogi Spur',
		'8191C405': 'Yodamquixi Spur',
		'8191C406': 'The Arm of Ramsit',
		'8191D403': 'Cuyberg',
		'8191D404': 'Iduniaiu',
		'8191D405': 'Retlamh Expanse',
		'8291A403': 'Alpbac Spur',
		'8291A404': 'Buongan Instability',
		'8291A405': 'Mohant Adjunct',
		'8291B403': 'Wechka',
		'8291B404': 'Ocrims Terminus',
		'8291B405': 'Buhiloper Fringe',
		'8291C403': 'Syaphoba Sector',
		'8291C404': 'Vajrap',
		'8291C405': 'Cezykin Expanse',
		'8291D404': 'Logoandh',
		'8391C404': 'Thewson Boundary',
	},
	LuleCORE: {
		'8191A403': 'Gegvirtam Conflux',
		'8191A404': 'Snatyr Conflux',
		'8191A405': 'Caquoian Anomaly',
		'8191B403': 'Sea of Afkaro',
		'8191B404': 'Ajdaribu',
		'8191B405': 'Bujunaiva',
		'8191C402': 'Dayleri Spur',
		'8191C403': 'Ictore Cluster',
		'8191C404': 'Foskogi Spur',
		'8191C405': 'Yodamquixi Spur',
		'8191C406': 'The Arm of Ramsit',
		'8191D403': 'Cuyberg',
		'8191D404': 'Iduniaiu',
		'8191D405': 'Retlamh Expanse',
		'8291A403': 'Alpbac Spur',
		'8291A404': 'Buongan Instability',
		'8291A405': 'Mohant Adjunct',
		'8291B403': 'Wechka',
		'8291B404': 'Ocrims Terminus',
		'8291B405': 'Buhiloper Fringe',
		'8291C403': 'Syaphoba Sector',
		'8291C404': 'Vajrap',
		'8291C405': 'Cezykin Expanse',
		'8291D404': 'Logoandh',
		'8391C404': 'Thewson Boundary',
	}
}

/**
 * A mapping of region codes to region names for huburb regions in the Galactic Hub
 * @type {Object.<string, string>}
 */
export const GHubHuburbRegions: Region = {
	'FA555C30': 'Wekeram Conflux',
	'FA555C31': 'Ahomas Fringe',
	'FA556C31': 'Nudryorob Fringe',
	'FA557C31': 'Urzews Instability',
	'FA557C30': 'Ercays',
	'FA557C2F': 'Dahiloci Conflux',
	'FA556C2F': 'Rapphosu',
	'FA555C2F': 'Kemurrim Expanse',
	'F8555C30': 'Ardarea Sector',
	'F8555C31': 'Cetrocho Spur',
	'F8556C31': 'Guitat Cloud',
	'F8557C31': 'Unceto Cloud',
	'F8557C30': 'Yamurab Instability',
	'F8557C2F': 'Tenavata Terminus',
	'F8556C2F': 'Menacaro',
	'F8555C2F': 'Ziessuw Mass'
}

// If the 'huburbs' variable is defined and truthy, add Galactic Hub regions to 'regions'
const huburbs = pageData.huburbs;
if (huburbs) addHuburbs(regions);

// Make 'regions' read-only
Object.freeze(regions);