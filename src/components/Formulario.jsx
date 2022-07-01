import { useState, useEffect } from 'react'
import Error from './Error';

function Formulario({pacientes, setPacientes, paciente, setPaciente}) {

  /* STATES */
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);
  /* USE EFFECTS */
  // En caso se que se presione un botón de editar y se actualice el paciente global, entonces actualizamos los datos del formulario
  useEffect(() => {
    if(Object.keys(paciente).length > 0) { // Comprobando si un objeto tiene algo
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    } 
  }, [paciente]);

  /* EVENT HANDLERS */
  const handleSubmit = (e) => {
    e.preventDefault();

    if([nombre, propietario, email, fecha, sintomas].includes('')) { // Si alguno de los campos está vacío
      setError(true);
      return;
    }

    setError(false);

    // Objeto de paciente
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas
    }
    
    if (paciente.id) { // Si existe el id es porque se está actualizando
      objetoPaciente.id = paciente.id; // En este punto el objeto paciente se convierte en el actualizado
      setPacientes(pacientes.map(p => p.id === objetoPaciente.id ? objetoPaciente : p));

      setPaciente({}); // Limpiamos el objeto paciente global
    } else{
      objetoPaciente.id = generateID();
      setPacientes([...pacientes, objetoPaciente]);
    }
    
    restartState();
  }

  /* AUX FUNCTIONS */
  const restartState = () => {
    setNombre('');
    setPropietario('');
    setEmail('');
    setFecha('');
    setSintomas('');
  }
  
  const generateID = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  }


  return (
    <div className="md:w-1/2 lg:w-2/5 ">
      <h2 className="font-black text-3xl text-center">
        Seguimiendo de Pacientes
      </h2>

      <p className="text-lg mt-5 mb-7 text-center">
        Añade pacientes y {''}
        <span className="text-indigo-600 font-bold">adminístralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-7 px-5 mb-7"
      >
        {error && /* si && entonces. En caso de que haya error se ejecuta lo que sigue */
          <Error><p>Todos los campos son obligatorios</p></Error>
        } 
        
        {/* CAMPO DE MASCOTA */}
        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Mascota
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 outline-none placeholder-slate-500 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        {/* CAMPO DEL NOMBRE DEL PROPIETARIO */}
        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Propietario
          </label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-2 outline-none placeholder-slate-500 rounded-md"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        {/* CAMPO DEL EMAIL */}
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email de contacto
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email contacto propietario"
            className="border-2 w-full p-2 mt-2 outline-none placeholder-slate-500 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* CAMPO DE FECHA DE ALTA */}
        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Fecha de alta
          </label>
          <input
            id="alta"
            type="date"
            placeholder="Fecha de alta"
            className="border-2 w-full p-2 mt-2 outline-none placeholder-slate-500 rounded-md"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        {/* CAMPO DE SÍNTOMAS*/}
        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Síntomas del paciente
          </label>
          <textarea
            name=""
            id="sintomas"
            placeholder="Describe los síntomas"
            rows="3"
            className="border-2 w-full p-2 mt-2 outline-none placeholder-slate-500 rounded-md"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          ></textarea>
        </div>

        {/* BOTÓN DE SUBMIT */}
        <input
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 w-full p-3 text-white uppercase font-bold cursor-pointer transition-all"
          value={
            paciente.id ? 'Guardar Cambios' : 'Añadir paciente' /* En caso de que tenga id es porque ya se guardó antes */
          }
        />
      </form>
    </div>
  )
}

export default Formulario
