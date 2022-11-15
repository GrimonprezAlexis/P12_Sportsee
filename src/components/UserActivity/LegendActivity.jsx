import PropTypes from 'prop-types';

const LegendContainer = () => {
    return (
        <div className="legend">
            <LegendInfo label="Poids (kg)" backgroundClass="bg-black"/>
            <LegendInfo label="Calories brûlées (kCal)" backgroundClass="bg-red"/>
        </div>
    )
};

/**
 * Legend activity (kg or kCal)
 * @param {label} string
 * @param {string} backgroundClass 
 * @returns {JSX}
 */
const LegendInfo = ({ label, backgroundClass }) => {
    return (
        <div className="legend__info">
            <span className={"legend__icon " + backgroundClass}></span>
            <p className="legend__text">{label}</p>
        </div>
    )
};

LegendInfo.propTypes = {
	label: PropTypes.string,
	backgroundClass: PropTypes.string,
};

export default LegendContainer;