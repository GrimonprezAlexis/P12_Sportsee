import axios from 'axios';
const apiUrl = process.env.REACT_APP_API_URL;

/**
 * Get user infos
 * @param {string} id 
 * @returns {object}
 */
export const getUserInfos = async (id) => {
	try {
		const res = await axios.get(`${apiUrl}/user/${id}`);
		return res.data;
	} catch (e) {
		console.log(e);
	}
};

/**
 * Get user activity 
 * @param {string}
 * @returns {object}
 */
export const getUserActivity = async (id) => {
	try {
		const res = await axios.get(`${apiUrl}/user/${id}/activity`);
		return res.data;
	} catch (e) {
		console.log(e);
	}
};

/**
 * Get user average session 
 * @param {string}
 * @returns {object}
 */
export const getUserAverageSessions = async (id) => {
	try {
		const res = await axios.get(`${apiUrl}/user/${id}/average-sessions`);
		return res.data;
	} catch (e) {
		console.log(e);
	}
};

/**
 * Get user performance 
 * @param {string}
 * @returns {object}
 */
export const getUserPerformance = async (id) => {
	try {
		const res = await axios.get(`${apiUrl}/user/${id}/performance`);
		return res.data;
	} catch (e) {
		console.log(e);
	}
};