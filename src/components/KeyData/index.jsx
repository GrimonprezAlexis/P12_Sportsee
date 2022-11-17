import PropTypes from 'prop-types';
import './index.scss';

/** 
 * Display icon with user infos 
 * @param  {string} icon
 * @param  {string} value
 * @param  {string} label
 * @return {JSX}
 */
const KeyData = ({icon, value, label}) => {
  return (
    <div className='keydata'>
      <img src={icon} alt={`${label}`} />
      <div className='keydata__sub'>
          <p className='keydata__sub__value'>{value}</p>
          <p className='keydata__sub__label'>{label}</p>
      </div>
    </div>
  );
};
export default KeyData;

KeyData.propTypes = {
  icon: PropTypes.string,
  info: PropTypes.string,
  text: PropTypes.string,
};