import './header.scss'
const Header = () => {
    return (
        <div className="header_section">
            <div className="header_section_left">
                <img className='header_section_left_logo' src='some url' alt='LOGO' />
            </div>
            <div className='header_section_right'>
                <div className='header_section_right'>
                    <div className='header_section_right_icon'>Bell Icon</div>
                </div>
            </div>
        </div>
    )
}

export default Header;