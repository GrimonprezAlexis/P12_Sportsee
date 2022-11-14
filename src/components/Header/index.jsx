import { Link } from 'react-router-dom'
import './index.scss'

const Header = () => {
  return (
    <>
    <header className="header">
        <div className="logo">
            <Link to="/">
                <img src={`${window.location.origin}/img/logo_text_old.png`}  alt="SportSee Home page" className="header__logo"/>
            </Link>
        </div>
        <nav className="header__navbar">
            <Link to="/" className="header__navbar__link" data-active="true">Accueil</Link>
            <Link to="/" className="header__navbar__link" data-active="true">Profil</Link>
            <Link to="/" className="header__navbar__link" data-active="true">Réglage</Link>
            <Link to="/" className="header__navbar__link" data-active="true">Communauté</Link>
        </nav>
    </header>
    </>
  )
}
export default Header
