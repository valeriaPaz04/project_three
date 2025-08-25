import './css/Props.css';

import codigoUno from '../Assets/codeHooks1.png';
import codigoDos from '../Assets/codeHooks2.png';
import codigoTres from '../Assets/codeHooks3.png';
import codigoCuatro from '../Assets/codeHooks4.png';
import codigoQuinto from '../Assets/codeHooks5.png';

import { useState, useEffect } from "react";

const Hooks = () => {

  const [hora, setHora] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    // Actualiza la hora cada segundo
    const intervalo = setInterval(() => {
      setHora(new Date().toLocaleTimeString());
    }, 1000);

    // Limpieza cuando el componente se desmonta
    return () => clearInterval(intervalo);
  }, []);

  return (
    <>
    <div className="all">
      <section className='primer'>
          <div className="title">
            <h1>Qué son <br/>los <span className='palabrita'>Hooks</span></h1>
            <p>Son funciones especiales que permiten usar características de React<br/><span style={{ color: 'gray' }}>(estado, ciclo de vida, contexto, etc.) en componentes funcionales. </span></p>
          </div>
          <div className="contenedores">
            <div>
              <p>Solo se llaman en el nivel superior del componente (no dentro de condicionales o bucles). Solo se usan dentro de componentes funcionales o de custom hooks.</p>
              <i className="fi fi-rs-border-top"></i>
            </div>
            <div>
              <p>Los hooks mas comunes son useState, useEffect, useContext.</p>
              <i className="fi fi-rs-grip-dots"></i>
            </div>
            <div>
              <p>Otros Hooks son useRef para referenciar elementos del DOM, useReducer que maneja estados más complejos, useMemo y useCallback para optimizar el rendimiento.</p>
              <i class="fi fi-sr-arrows-to-dotted-line"></i>
            </div>
          </div>
        </section>
        
        <section className='segundo'>
          <h1>Hooks <span className='palabrita'>comunes</span></h1>
          <div className='grid'>
            <article>
              <p style={{ alignSelf: 'flex-start' }}><strong>Ejemplo simple</strong></p>
              <p>En este ejemplo se utiliza el Hook useState para manejar el estado dentro de un componente funcional. La función useState(0) inicializa la variable count con el valor 0 y proporciona la función setCount para actualizarlo. Cada vez que el usuario hace clic en el botón se ejecuta setCount(count + 1), lo que incrementa el valor y hace que el componente se renderice nuevamente mostrando el nuevo número de clics.</p>
              <div className='imgContainer'>
                <img src={codigoUno} alt='Ejemplo 1' width='98%'/>
              </div>
            </article>

            <article>
              <p style={{ alignSelf: 'flex-start' }}><strong>useState</strong></p>
              <p>Es una función de React que permite a los componentes funcionales tener un estado interno. Con useState se puede declarar una variable de estado y una función que la actualiza, lo que permite que la interfaz se renderice nuevamente cada vez que ese valor cambie.</p>
              <div className='imgContainer'>
                <img src={codigoDos} alt='Ejemplo 2' width='100%'/>
              </div>
            </article>

            <article>
              <p style={{ alignSelf: 'flex-start' }}><strong>useEffect</strong></p>
              <p>Permite manejar efectos secundarios dentro de los componentes funcionales. Los efectos secundarios son todas aquellas acciones que ocurren fuera del flujo normal de renderizado, como llamadas a APIs, manejo de temporizadores, etc.</p>
              <div className='imgContainer'>
                <img src={codigoTres} alt='Ejemplo 3' width='100%'/>
              </div>
            </article>

            <article>
              <p style={{ alignSelf: 'flex-start' }}><strong>useContext</strong></p>
              <p>Permite acceder directamente a un contexto de React, lo cual es muy útil para compartir información entre varios componentes sin necesidad de pasarla manualmente a través de props en cada nivel de la jerarquía. Esto evita lo que se conoce como "prop drilling" (tener que pasar props de un componente padre a hijos y nietos solo para que llegue al componente que realmente las necesita).</p>
              <div className='imgContainer'>
                <img src={codigoCuatro} alt='Ejemplo 4' width='100%'/>
              </div>
            </article>

          </div>
        </section>

        <section className='tercer'>
          <div className='contenido'>
            <p className='p-verde'>ϟ ⠀Ejemplo visual</p>
            <h1>Reloj en tiempo real con <span className='palabrita'>Hooks</span></h1>

            <p className='ds'>En este ejemplo se utilizan <span style={{ color: "white" }}>useState y useEffect.</span></p>
            <p className='ds'>useState que guarda el estado de la hora y useEffect corre el intervalo y lo limpia al desmontar el componente.</p>

            <div style={{ background: '#001c19', padding:'10px', marginTop:'20px', width:'30%'}}>
              <h2>La hora actual es:</h2>
              <p>{hora}</p>
            </div>
          </div>

          <div className='imgSuelta'>
            <img src={codigoQuinto} alt='Ejemplo visual' width='80%'/>
          </div>
        </section>
      </div>
    </>
  );
}

export default Hooks;