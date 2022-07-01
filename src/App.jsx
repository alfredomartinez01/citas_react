import './App.css'
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes'
import { useState, useEffect } from 'react'

function App() {
  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? []); // OJO: en las úlitmas versiones de React ya no se usa un useEffect para leer el localStorage, sino que se usa un useState. Además, el operador ?? comprueba si está null
  const [paciente, setPaciente] = useState({});

  /* USE EFFECTS */
  // En caso de que cambie el arreglo de pacientes se guarda o actualiza en localStorage
  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes]);

  /* AUX FUNCTIONS */
  const eliminarPaciente = id => {
    setPacientes(pacientes.filter(paciente => paciente.id !== id)); // Eliminamos el paciente por id
  }

  return (
    <div className="container mx-auto mt-10"> 
      <Header/> {/* Se manda a llamar un componente */}

      <div className="m-12 md:flex max-h-screen"> {/* Va aplicar el flex de un un tamaño medio hacia arriba */}
        <Formulario
         pacientes={pacientes}
         setPacientes={setPacientes} /* Se Pasa una función por props */
         paciente={paciente}
         setPaciente={setPaciente}
         />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}
export default App
