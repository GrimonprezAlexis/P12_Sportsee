import { Link } from "react-router-dom";
import './index.scss';

const NavVertical = () => {    
    const pathPublic = `${window.location.origin}`;
    const meditationIcon = `${pathPublic}/img/iconMeditation.svg`;
    const swimIcon = `${pathPublic}/img/iconSwim.svg`;
    const bikeIcon = `${pathPublic}/img/iconBike.svg`;
    const bellIcon = `${pathPublic}/img/iconBell.svg`;

    return(
        <section className="sidebar">
        <div className="sidebar__icon">
            <Link to='/'><img src={meditationIcon} alt="Meditation Icon"/></Link>
            <Link to='/'><img src={swimIcon} alt="Swim Icon"/></Link>
            <Link to='/'><img src={bikeIcon} alt="Bike icon"/></Link>
            <Link to='/'><img src={bellIcon} alt="Bell Icon"/></Link>
        </div>
        <p className="copyright">Copiryght, SportSee 2020</p>
        </section>
    );
};
export default NavVertical;