function Paciente({paciente, setPaciente, eliminarPaciente}) {
  
  const {nombre, propietario, email, fecha, sintomas, id} = paciente;

  const handleEliminar = () => {
    const respuesta = window.confirm('¿Está seguro de eliminar este paciente?');
    if (respuesta)
      eliminarPaciente(id);
  }

  return (
    <div className="m-3 first:mt-0 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {''}
        <span className="font-normal normal-case">{nombre}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: {''}
        <span className="font-normal normal-case">{propietario}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {''}
        <span className="font-normal normal-case">{email}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha alta: {''}
        <span className="font-normal normal-case">{fecha}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Síntomas: {''}
        <span className="font-normal normal-case">{sintomas}</span>
      </p>

      <div className="flex justify-between">
        <button className="p-2 mr-2 bg-sky-500 hover:bg-sky-600 text-white text-base font-bold uppercase rounded-md" 
        onClick={() => setPaciente(paciente)} // Pasamos actualizamos el paciente de app que se propagará a formulario
        >Editar</button>
        <button className="p-2 mr-2 bg-red-500 hover:bg-red-600 text-white text-base font-bold uppercase rounded-md" 
        onClick={handleEliminar} // Pasamos el id para eliminar el paciente
        >Eliminar</button>
      </div>
    </div>
  )
}

export default Paciente
