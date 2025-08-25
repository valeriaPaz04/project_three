import './css/Inicio.css';
import { Link } from 'react-router-dom';

import iconoVScode from '../assets/iconoVScode.png';
import iconoNode from '../assets/iconoNodejs.png';
import iconoNpm from '../assets/iconoNpm.png';

import Carrusel from "../Components/Carrusel";
import img1 from '../assets/props.png';
import img2 from '../assets/estados.png';
import img3 from '../assets/ciclovida.png';
import img4 from '../assets/hooks.png';
import img5 from '../assets/dom.png';
import img6 from '../assets/redux.png';

const Inicio = () => {

  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <>
    <div className='first'>
      <p className='p-green'>Que es React⠀ →</p>
      <h1>React es una librería de JavaScript para<br/> crear interfaces de usuario <span className='palabrita'>dinámicas</span></h1>

      <p className='ds'>Ideal para desarrollar con velocidad, mantener el código limpio y crecer sin límites.</p>
      <p className='ds'><span style={{ color: 'white' }}>Componentes reutilizables</span> en React para crear aplicaciones.</p>
      <div>
        <div className='uno'>
          <p>Para ejecutarse</p>
        </div>
        <div className='dos'>
          <p>{'>'}_⠀ npm run dev</p>
        </div>
      </div>
    </div>

    <div className='second'>
      <p>Herramientas para trabajar con React.</p>
      <p style={{ color: '#a1a1aa' }}>Funciona desde proyectos pequeños hasta grandes aplicaciones.</p>

      <div className='logos'>
        <div>
          <img src={iconoVScode} alt="VSCode" width='200px'/>
        </div>
        <div>
          <img src={iconoNode} alt="Node.js" width='200px'/>
        </div>
        <div>
          <img src={iconoNpm} alt="NPM" width='200px'/>
        </div>
      </div>
    </div>

    <div className='third'>
      <div className='principal'>
        <p>ϟ ⠀Conceptos de React</p>
      </div>
      <div className='secundario'>
        <h1>Domina React <span className='palabrita'>rápido</span> <br/>con ejemplos</h1>
        <p>Explicaciones claras y ejemplos<br/> prácticos de Props, Estados, Hooks<br/> <span style={{ color: "white" }}>y mucho más.</span></p>
        <Link to="/Props">
          <button className='boton'>Explorar React⠀ →</button>
        </Link>
      </div>
      <Carrusel images={images} />
    </div>
    </>
  );
}

export default Inicio;