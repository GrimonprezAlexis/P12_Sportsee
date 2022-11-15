import { Link } from 'react-router-dom'
import './index.scss'

const HeaderLogo = () => {
  return (
    <div className="logo">
        <Link to="/">
            <img src={`${window.location.origin}/img/logo_text_old.png`}  alt="SportSee Home page" className="header__logo"/>
        </Link>
    </div>
  )
};

const HeaderLink = () => {
  const links = [
    { label: 'Accueil', url: '/'}, 
    { label: 'Profil', url: '/'}, 
    { label: 'Réglage', url: '/parameters'}, 
    { label: 'Communauté', url: '/community'}, 
  ]
  return (
    links.map((link, index) => <Link to={`${link.url}`} className="header__navbar__link" data-active="true">{link.label}</Link>)
  )
};

const Header = () => {
  return (
    <>
    <header className="header">
        <HeaderLogo />
        <nav className="header__navbar">
          <HeaderLink />
        </nav>
    </header>
    </>
  )
};

export default Header;
