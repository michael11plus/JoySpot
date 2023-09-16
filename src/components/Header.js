import './Header.css';

const Header = () => {
    return(
        <header className='header'>
            <img src='./globe.png' alt='logo' className='header--logo' />
            
            <h1 className='header--company'>
                JoySpot
            </h1>

            <div className='header--right'>
                <a href='https://dictionary.cambridge.org/dictionary/english/sign-up' target='_blank' rel='noopener noreferrer'>
                    <button className='header--signup'>
                        Sign Up    
                    </button>
                </a>
                <a href='https://dictionary.cambridge.org/dictionary/english/log-in' target='_blank' rel='noopener noreferrer' >
                    <button className='header--login'>
                        Log In    
                    </button>
                </a>
            </div>
        </header>
    )
}


export default Header;