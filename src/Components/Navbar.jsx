import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
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
        </nav>
)
}
export default Navbar;