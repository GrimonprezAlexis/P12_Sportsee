import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const AverageToolType = ({active, payload}) => {
    if (active){
        return (
            <div className="averageToolType">
                <p className='averageToolType__text'>{payload[0].value}min</p>
            </div>
        );
    };
    return null;
};

export default AverageToolType;

AverageToolType.propTypes = {
	active: PropTypes.bool,
	payload: PropTypes.array,
};