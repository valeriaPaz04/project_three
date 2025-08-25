import './css/Props.css';
import './css/CicloDeVida.css';

import codigoUno from '../Assets/redux.png';
import codigoDos from '../Assets/codeRedux1.png';
import codigoTres from '../Assets/codeRedux2.png';

const Redux = () => {
  return (
    <>
    <div className="all">
      <section className='primer'>
          <div className="title">
            <h1>Qué es <span className='palabrita'>Redux</span></h1>
            <p>Redux es una librería de JavaScript para manejar el estado global de una aplicación. <br/><span style={{ color: 'gray' }}>Permite que diferentes componentes accedan a los mismos datos sin necesidad de pasarlos con props.</span></p>
          </div>
          <div className="contenedores">
            <div>
              <p><strong>Store.</strong> Almacena el estado global de la aplicación.</p>
              <i className="fi fi-rs-box"></i>
            </div>
            <div>
              <p><strong>Actions.</strong> Son objetos que describen lo que queremos hacer (ej. aumentar un contador).</p>
              <i className="fi fi-bs-arrow-trend-up"></i>
            </div>
            <div>
              <p><strong>Reducers.</strong> Funciones que reciben una acción y actualizan el estado de la store según lo indicado.</p>
              <i className="fi fi-rr-gears"></i>
            </div>
          </div>
        </section>
        
        <section className='segundo'>
          <h1>Gestión de <span className='palabrita'>estado global</span></h1>
          <div className='grid'>
            <article>
              <p style={{ alignSelf: 'flex-start' }}><strong>Párrafo explicativo</strong></p>
              <p style={{ lineHeight: '35px' }}>En una aplicación pequeña, cada componente puede manejar su propio estado sin problema. Sin embargo, cuando la aplicación crece y varios componentes necesitan acceder o modificar la misma información, se vuelve difícil mantener todo sincronizado. Aquí entra la gestión de estado global, que consiste en centralizar los datos en un único lugar accesible para todos los componentes. De esta manera, la información importante (como el usuario autenticado, un carrito de compras o un contador) se comparte fácilmente sin tener que pasar props entre muchos niveles. Herramientas como Redux o el Context API de React permiten implementar esta gestión de forma ordenada y predecible.</p>
              <div className='imgContainer'>
                <img src={codigoUno} alt='Ejemplo 1' width='100%' style={{ marginTop: '-150px' }}/>
              </div>
            </article>

            <article>
              <p style={{ alignSelf: 'flex-start',}}><strong>Ejemplo básico</strong></p>
              <div className='imgContainer'>
                <img src={codigoDos} alt='Ejemplo 2' width='95%'/>
              </div>
              <div className='imgContainer' style={{marginTop:'15px' }}>
                <img src={codigoTres} alt='Ejemplo 3' width='95%'/>
              </div>
            </article>

          </div>
        </section>

      </div>
    </>
  );
}

export default Redux;