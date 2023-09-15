import './Header.css';

const Header = () => {
    return(
        <header className='header'>
            <img src='./globe.png' alt='logo' className='header--logo' />
            
            <h1 className='header--company'>
                JoySpot
            </h1>

            <div className='header--right'>
                <button className='header--signup'>
                    Sign Up    
                </button>

                <button className='header--login'>
                    Log In    
                </button>
            </div>
        </header>
    )
}


export default Header;