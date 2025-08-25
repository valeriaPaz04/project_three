import {Routes, Route} from 'react-router-dom';

import CicloDeVida from '../Pages/CicloDeVida';
import Estados from "../Pages/Estados";
import Hooks from "../Pages/Hooks";
import Inicio from '../Pages/Inicio';
import Props from '../Pages/Props';
import Redux from '../Pages/Redux';
import VirtualDOM from '../Pages/VirtualDOM';

const Rutas = () => {
    return (
        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/Props" element={<Props />} />
            <Route path="/Estados" element={<Estados />} />
            <Route path="/CicloDeVida" element={<CicloDeVida />} />
            <Route path="/Hooks" element={<Hooks />} />
            <Route path="/VirtualDOM" element={<VirtualDOM />} />
            <Route path="/Redux" element={<Redux />} />
        </Routes>
    );
}

export default Rutas;