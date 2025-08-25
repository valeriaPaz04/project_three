import './css/Props.css';
import './css/CicloDeVida.css';

import codigoUno from '../Assets/codeCicloVida1.png';
import codigoDos from '../Assets/codeCicloVida2.png';
import codigoTres from '../Assets/codeCicloVida3.png';

const CicloDeVida = () => {
  return (
    <>
    <div className="all">
      <section className='primer'>
          <div className="title">
            <h1>Qué significa el <span className='palabrita'>ciclo de vida</span> <br/>de un componente</h1>
            <p>Son las fases por las que pasa un componente desde que se <br/><span style={{ color: 'gray' }}>crea, se actualiza y hasta que se elimina del DOM.</span></p>
          </div>
          <div className="contenedores">
            <div>
              <p>El <strong>montaje</strong> ocurre cuando el componente aparece por primera vez en pantalla. Por ejemplo al pedir datos a una API al iniciar.</p>
              <i className="fi fi-rs-expand"></i>
            </div>
            <div>
              <p>La <strong>actualización</strong> se da cuando cambian las props o el state del componente. Por ejemplo volver a ejecutar una acción si cambió una prop.</p>
              <i className="fi fi-rr-loading"></i>
            </div>
            <div>
              <p>El <strong>desmonataje</strong> pasa cuando el componente desaparece del DOM. Por ejemplo limpiar un temporizador o una suscripción.</p>
              <i className="fi fi-rs-clean"></i>
            </div>
          </div>
        </section>
        
        <section className='segundo'>
          <h1>Ciclo de <span className='palabrita'>vida</span> en componentes funcionales con Hooks</h1>
          <div className='grid'>
            <article>
              <p style={{ alignSelf: 'flex-start' }}><strong>Ejemplo en componente de clase</strong></p>
              <p>Este componente de clase demuestra el ciclo de vida en React. Primero, en el constructor se inicializa el estado con contador = 0. Cuando el componente aparece en pantalla, se ejecuta componentDidMount. Cada vez que el estado cambia (al dar clic en el botón e incrementar el contador), se dispara componentDidUpdate. Finalmente, si el componente desaparece del DOM, se ejecuta componentWillUnmount, ideal para limpiar procesos.</p>
              <div className='imgContainer'>
                <img src={codigoUno} alt='Ejemplo 1' width='98%'/>
              </div>
            </article>

            <article>
              <p style={{ alignSelf: 'flex-start' }}><strong>Equivalente con Hooks en componentes funcionales</strong></p>
              <p>Este componente funcional usa Hooks para manejar el ciclo de vida. Con useState se crea el estado contador. El primer useEffect con un arreglo vacío ([]) se ejecuta solo al montar y, gracias al return, también limpia al desmontar. El segundo useEffect, que depende de contador, se ejecuta cada vez que este cambia, simulando la fase de actualización.</p>
              <div className='imgContainer'>
                <img src={codigoDos} alt='Ejemplo 2' width='95%'/>
              </div>
            </article>

          </div>
        </section>

        <section className='tercer'>
          <div className='contenido'>
            <p className='p-verde'>ϟ ⠀Ejemplo visual</p>
            <h1>Ciclo de <span className='palabrita'>vida</span> con Hooks</h1>

            <p className='ds'>En este ejemplo se utilizan <span style={{ color: "white" }}>useState y useEffect.</span></p>
            <p className='ds'>Muestra cómo funciona el ciclo de vida de un componente funcional.</p>
          </div>

          <div className='imgSuelta'>
            <img src={codigoTres} alt='Ejemplo visual' width='80%'/>
          </div>
        </section>
      </div>
    </>
  );
}

export default CicloDeVida;