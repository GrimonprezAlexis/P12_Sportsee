import PropTypes from 'prop-types'; 
import './index.scss'

const UserNameBanner = ({name}) => {
    return (  
        <>
        <main className="main">
            <div class="col-md-10 mt-5rem">
                <span className="main__title black">Bonjour <span className="main__title red">{name}</span></span>
                <p className="main__title__sub mt-2rem">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
        </main>
        </>
    );
}

export default UserNameBanner;

UserNameBanner.propTypes = {
	name: PropTypes.string,
};