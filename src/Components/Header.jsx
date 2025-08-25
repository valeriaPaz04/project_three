import Navbar from './Navbar';

import logo from './assets/logo.png';

const Header = () => {
    return(
        <header>
            <div style={{ marginLeft: '80px' }}>
                <img src={logo} width="35px"/>
                <h2 style={{ marginLeft: '5px' }}>react</h2>
            </div>
            <div style={{ marginRight: '20px', gap: '50px'}}>
                <Navbar />
                <div className="icons">
                    <a href='https://github.com/valeriaPaz04/project_three.git' target='blank_' style={{textDecoration: 'none', color: 'white' }}><i className="fi fi-brands-github"></i></a>
                    <i className="fi fi-tc-moon"></i>
                </div>
            </div>
        </header>
    )
}
export default Header;