import {Link} from 'react-router-dom';

import logo from './assets/logo.png';

const Footer = () => {
    return(
        <footer>
            <div className='footer-left'>
                <div className='logo'>
                    <img src={logo} width="35px"/>
                    <h2 style={{ marginLeft: '5px' }}>react</h2>
                </div>
                <p>Proyecto de Valeria © {new Date().getFullYear()}</p>
            </div>
            <div className='footer-right'>
                <ul>
                    <li><strong>Documentación</strong></li>
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/Props">Props</Link>
                    </li>
                    <li>
                        <Link to="/Estados">Estados</Link>
                    </li>
                    <li>
                        <Link to="/CicloDeVida">Ciclo de Vida</Link>
                    </li>
                    <li>
                        <Link to="/Hooks">Hooks</Link>
                    </li>
                    <li>
                        <Link to="/VirtualDOM">Virtual DOM</Link>
                    </li>
                    <li>
                        <Link to="/Redux">Redux</Link>
                    </li>
                </ul>
                <ul className='tags'>
                    <li style={{ color: 'white', fontSize: '16px' }}><strong>Etiquetas</strong></li>
                    <li>Ejemplos Básicos</li>
                    <li>Proyectos Prácticos</li>
                    <li>Componentes</li>
                </ul>
                <ul className='tags'>
                    <li style={{ color: 'white', fontSize: '16px' }}><strong>Comunidad</strong></li>
                    <li>Foro</li>
                    <li>Blog</li>
                    <li>Contribuir</li>
                </ul>
            </div>

        </footer>
)
}
export default Footer;