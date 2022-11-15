import React from 'react';
import PropTypes from 'prop-types';


/** Tooltype container on hover barChart user activity
 * @param  {bool} active
 * @param  {array} payload
 * @return {JSX}
 */
const ToolTipActivity = ({active, payload}) => {
    if (active){
    return (
        <div className='tooltip'>
            <ToolTipText value={payload[0].value} label='kg'/>
            <ToolTipText value={payload[1].value} label='Kcal'/>
        </div>
    
     );
    }
    return null
};

/**
 * Tooltype text
 * @param {string} value
 * @param {string} label 
 * @returns {JSX}
 */
const ToolTipText = ({ value, label }) => {
    return (
        <p className='tooltip__text'>{value} {label}</p>
    )
};

export default ToolTipActivity;

ToolTipActivity.propTypes = {
	active: PropTypes.bool,
	payload: PropTypes.array,
};

ToolTipText.propTypes = {
	value: PropTypes.string,
	label: PropTypes.string,
};
