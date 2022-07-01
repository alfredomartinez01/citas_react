const Header = () => {
  return (
    <>
      <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto"> {/* Con md: se pone un media query */}
        Seguimiento pacientes {''} {/* Agregamos un espacio usando JS */}
        <span className="text-indigo-600">veterinaria</span>
      </h1>
    </>
  )
}

export default Header
