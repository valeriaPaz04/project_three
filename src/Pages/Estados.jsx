import './css/Props.css';
import './css/Estados.css'

import codigoUno from '../Assets/codeState1.png';
import codigoDos from '../Assets/codeState2.png';

import { useState } from "react";

const Estados = () => {

  const [contador, setContador] = useState(0);

  return (
    <>
    <div className="all">
      <section className='primer'>
          <div className="title">
            <h1>Qué son <br/>los <span className='palabrita'>estados</span></h1>
            <p>El state es un objeto interno de un componente que guarda <br/><span style={{ color: 'gray' }}>información que puede cambiar con el tiempo.</span></p>
          </div>
          <div className="contenedores">
            <div>
              <p>El state puede modificarse y cuando cambia, React vuelve a renderizar el componente para mostrar la información actualizada.</p>
              <i className="fi fi-rc-settings"></i>
            </div>
            <div>
              <p>Los states son datos <br/>propios del componente (mutables). Por ejemplo, el estado de ánimo es cambiante.</p>
              <i className="fi fi-rr-shuffle"></i>
            </div>
            <div>
              <p>Un estado se puede reutilizar entre componentes. Nunca se debe modificar el estado directamente (contador++), sino usando (setContador).</p>
              <i className="fi fi-rr-file-recycle"></i>
            </div>
          </div>
        </section>
        
        <section className='segundo'>
          <h1>Ejemplos de <span className='palabrita'>Estados</span></h1>
          <div className='grid'>
            <article>
              <p style={{ alignSelf: 'flex-start' }}><strong>Ejemplo básico</strong></p>
              <p>El contador es como una cajita que guarda un número, y setContador es la función que se usa para cambiar ese valor. Con useState(0) el contador empieza en 0. Cada vez que alguien hace clic en el botón, setContador aumenta el valor de la cajita en +1, y el texto se actualiza automáticamente en pantalla.</p>
              <div className='imgContainer'>
                <img src={codigoUno} alt='Ejemplo 1' width='95%'/>
              </div>
            </article>

            <article>
              <p style={{ alignSelf: 'flex-start' }}><strong>Ejemplo con varios estados</strong></p>
              <p>Este componente tiene dos estados: nombre (inicia como "Valeria") y edad (inicia en 16). Cada estado se actualiza con su función correspondiente. Al hacer clic en el botón, (setEdad) suma 1 a la edad, como si el usuario cumpliera años. React vuelve a renderizar el componente y muestra el valor actualizado automáticamente.</p>
              <div className='imgContainer'>
                <img src={codigoDos} alt='Ejemplo 2' width='95%'/>
              </div>
            </article>

          </div>
        </section>

        <section className='tercer'>
          <div className='contenido'>
            <p className='p-verde'>ϟ ⠀Ejemplo interactivo</p>
            <h1>Contador con <span className='palabrita'>estado</span></h1>

            <p className='ds'>En este ejemplo se utiliza useState para <span style={{ color: "white" }}>aumentar o disminuir</span></p>
            <p className='ds'>el valor del contador al hacer clic en los botones.</p>
          </div>

          <div className="caja-mayor">
            <h3>Contador</h3>
            <p>Pulsa los botones</p>

            <div className="box">
              <span className="contador">{contador}</span>
              <div className='btns'>
                <button onClick={() => setContador(contador - 1)}>Disminuir</button>
                <button onClick={() => setContador(contador + 1)}>Aumentar</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Estados;