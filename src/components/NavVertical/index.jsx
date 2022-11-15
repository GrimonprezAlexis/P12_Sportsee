import { Link } from "react-router-dom";
import './index.scss';

const NavVertical = () => {
    return(
        <section className="sidebar">
        <div className="sidebar__icon">
            <Link to='/'><img src={`${window.location.origin}/img/icon_1.png`} alt="SportSee Home page"/></Link>
            <Link to='/'><img src={`${window.location.origin}/img/icon_2.png`} alt="SportSee Home page"/></Link>
            <Link to='/'><img src={`${window.location.origin}/img/icon_3.png`} alt="SportSee Home page"/></Link>
            <Link to='/'><img src={`${window.location.origin}/img/icon_4.png`} alt="SportSee Home page"/></Link>
        </div>
        <p className="copyright">Copiryght, SportSee 2020</p>
        </section>
    );
};

export default NavVertical;