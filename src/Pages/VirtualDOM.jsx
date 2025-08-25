import './css/Props.css';
import './css/CicloDeVida.css';

import codigoUno from '../Assets/codeDOM1.png';
import codigoDos from '../Assets/codeDOM2.png';

const VirtualDOM = () => {
  return (
    <>
    <div className="all">
      <section className='primer'>
          <div className="title">
            <h1>Qué es el <span className='palabrita'>Virtual DOM</span></h1>
            <p>Es una copia ligera del DOM real que React mantiene en memoria.<br/><span style={{ color: 'gray' }}>Permite que las actualizaciones en la interfaz sean más rápidas y eficientes.</span></p>
          </div>
          <div className="contenedores">
            <div>
              <p>Trae rendimiento evitando renderizados innecesarios, optimización actualizando solo lo que cambió y una mejor experiencia en interfaces fluidas.</p>
              <i className="fi fi-rs-pixabay"></i>
            </div>
          </div>
        </section>
        
        <section className='segundo'>
          <h1>Virtual <span className='palabrita'>DOM</span></h1>
          <div className='grid'>
            <article>
              <p style={{ alignSelf: 'flex-start' }}><strong>Funcionamiento</strong></p>
              <p>Cuando cambia algo en la interfaz (por ejemplo, un estado o una prop), React actualiza primero el Virtual DOM. Luego React compara el Virtual DOM actualizado con la versión anterior (diffing). Solo los cambios necesarios se aplican al DOM real (renderizado eficiente).</p>
              <div className='imgContainer'>
                <img src={codigoUno} alt='Ejemplo 1' width='98%'/>
              </div>
            </article>

            <article>
              <p style={{ alignSelf: 'flex-start' }}><strong>Ejemplo VirtualDOM</strong></p>
              <p>Cada vez que se hace clic en Aumentar, cambia el estado contador. React no recarga toda la página, solo actualiza el &lt;p&gt; donde está el número. Esto ocurre gracias al Virtual DOM, que compara la versión anterior con la nueva y actualiza solo lo necesario en el DOM real.</p>
              <div className='imgContainer'>
                <img src={codigoDos} alt='Ejemplo 2' width='100%'/>
              </div>
            </article>

          </div>
        </section>
      </div>
    </>
  );
}

export default VirtualDOM;