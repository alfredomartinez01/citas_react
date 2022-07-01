import Paciente from './Paciente'

function ListadoPacientes({ pacientes, setPaciente, eliminarPaciente }) {
  return (
    <div className="sm: md:w-1/2 lg:w-3/5">
      <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
      <p className="text-lg mt-5 mb-7 text-center">
        Administra tus {''}
        <span className="font-bold text-indigo-600">pacientes y citas</span>
      </p>

      <div className="md:max-h-full md:overflow-y-auto">
        {pacientes && pacientes.length ? ( // Comprobando que haya pacientes
          pacientes.map((paciente) => (
            <Paciente key={paciente.id} paciente={paciente} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente}/>
          ))
        ) : (
          // En caso de que no haya pacientes
          <div className="m-3 first:mt-0 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase text-center">No hay pacientes, comienza agregando uno y aparecerá en este lugar</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ListadoPacientes
