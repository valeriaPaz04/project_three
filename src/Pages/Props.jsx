import './css/Props.css';

import codigoUno from '../Assets/codeProps1.png';
import codigoDos from '../Assets/codeProps2.png';
import codigoTres from '../Assets/codeProps3.png';
import codigoCuatro from '../Assets/codeProps4.png';

import { useState } from "react";

function ComponenteHijo({ nombre, edad }) {
  return (
    <div className="card">
      <h4>Hola, {nombre} 👋</h4>
      <p>Tu edad es {edad} años.</p>
    </div>
  );
}

const Props = () => {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [personas, setPersonas] = useState([]);

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (!nombre || !edad) return; // evitar datos vacíos
    setPersonas([...personas, { nombre, edad }]);
    setNombre("");
    setEdad("");
  }
  return (
    <>
    <div className="all">
      <section className='primer'>
          <div className="title">
            <h1>Qué son <br/>las <span className='palabrita'>props</span></h1>
            <p>Se usan para pasar información <br/><span style={{ color: 'gray' }}>de un componente padre a un hijo.</span></p>
          </div>
          <div className="contenedores">
            <div>
              <p>Sirven para personalizar los componentes y hacerlos reutilizables con distintos datos.</p>
              <i className="fi fi-sr-research-arrows-circle"></i>
            </div>
            <div>
              <p>Las props son inmutables (el hijo <br/> no las cambia) y unidireccionales (los datos siempre van del padre al hijo).</p>
              <i className="fi fi-rr-convert-shapes"></i>
            </div>
            <div>
              <p>Props viene de properties en <br/> inglés, que significa propiedades.</p>
              <i className="fi fi-rr-english"></i>
            </div>
          </div>
        </section>
        
        <section className='segundo'>
          <h1>Diferentes formas de trabajar con <span className='palabrita'>Props</span></h1>
          <div className='grid'>
            <article>
              <p style={{ alignSelf: 'flex-start' }}><strong>Sintaxis básica</strong></p>
              <p>Las props funcionan parecido a los parámetros en una función de JavaScript. El componente hijo recibe props y puede acceder a sus valores usando {'{'}props.propiedad{'}'}. Es como darle un nombre a una variable para luego usarla. Las props se pasan como atributos cuando se llama al componente.</p>
              <div className='imgContainer'>
                <img src={codigoUno} alt='Ejemplo 1' width='70%'/>
              </div>
            </article>

            <article>
              <p style={{ alignSelf: 'flex-start' }}><strong>Desestructuración de props</strong></p>
              <p>En lugar de escribir props.nombre, podemos desestructurar las props directamente en los parámetros del componente. Esto hace el código más legible y directo.</p>
              <div className='imgContainer'>
                <img src={codigoDos} alt='Ejemplo 2' width='70%'/>
              </div>
            </article>

            <article>
              <p style={{ alignSelf: 'flex-start' }}><strong>Props dinámicas</strong></p>
              <p>Las props no tienen que ser valores fijos: se pueden pasar variables, expresiones, números, booleanos, objetos o incluso funciones. Esto hace que los componentes sean flexibles y reutilizables.</p>
              <div className='imgContainer'>
                <img src={codigoTres} alt='Ejemplo 3' width='70%'/>
              </div>
            </article>

            <article>
              <p style={{ alignSelf: 'flex-start' }}><strong>Props.children</strong></p>
              <p>Existe una prop especial llamada children. Permite enviar contenido dentro de un componente, en lugar de pasarlo solo como atributo.</p>
              <div className='imgContainer'>
                <img src={codigoCuatro} alt='Ejemplo 4' width='70%'/>
              </div>
            </article>
          </div>
        </section>

        <section className='tercer'>
          <div className='contenido'>
            <p className='p-verde'>ϟ ⠀Ejemplo interactivo</p>
            <h1>Creando tarjetas interactivas con datos <span className='palabrita'>personalizados</span></h1>

            <p className='ds'>En este ejemplo, el componente padre envía datos a los hijos mediante props.</p>
            <p className='ds'>Cada tarjeta recibe un nombre y una edad <span style={{ color: "white" }}>distintos.</span></p>
          </div>

          <div className='formulario'>
            <div className='content'>
              <h2>Ejemplo interactivo con Props</h2>
              <p>Escribe un nombre y una edad para enviar datos al componente hijo:</p>
            </div>

            {/* Formulario */}
            <form onSubmit={manejarEnvio} className="form-box">
              <input
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
              <input
                type="number"
                placeholder="Edad"
                value={edad}
                onChange={(e) => setEdad(e.target.value)}
              />
              <button type="submit">Agregar</button>
            </form>

            {/* Resultado ejecutado con props */}
            <div className="example-box">
              <h3>Resultado en vivo:</h3>
                {personas.map((p, index) => (
                  <ComponenteHijo key={index} nombre={p.nombre} edad={p.edad} />
                ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Props;