import { NavLink } from 'react-router-dom';
import './index.scss';

const HeaderLink = () => {
  const links = [
    { label: 'Accueil', url: '/'}, 
    { label: 'Profil', url: '/'}, 
    { label: 'Réglage', url: '/parameters'}, 
    { label: 'Communauté', url: '/community'}, 
  ]
  return (
    links.map((link, index) => <NavLink key={index} to={link.url} className="header__link" data-active="true">{link.label}</NavLink>)
  );
};

const Header = () => {
  return (
    <header className="header">
        <img src={`${window.location.origin}/img/logo.svg`}  alt="SportSee Home page" className="header__logo"/>
        <HeaderLink />
    </header>
  );
};

export default Header;
