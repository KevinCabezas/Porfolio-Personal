export default function Portada() {
  return (
    <section
      id="home"
      className="pt-[100px] w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-end"
      style={{ backgroundImage: "url('/portada-porfolio.png')" }}
    >
      <div className="w-[50%] flex flex-col items-start space-y-2 pr-20">
        {/* Imagen de retrato */}
        <div className="w-full flex justify-start pl-36">
          <img
            src="/retrato.jpg"
            alt="Retrato"
            className="w-[150px] h-auto rounded-full"
          />
        </div>

        {/* Título */}
        <h1 className="text-[61px] font-semibold flex gap-5">
          <span className="text-white">KEVIN</span>{' '}
          <span className="text-purple-400">CABEZAS</span>
        </h1>

        {/* Subtítulo */}
        <h2 className="text-[24px] font-medium text-cyan-500">
          Estudiante de Tecnicatura en Programación
        </h2>

        {/* Descripción */}
        <p className="text-[14px] max-w-[500px] text-white pt-2">
          Busco una oportunidad para aplicar y expandir mis conocimientos en un entorno profesional, 
          con el objetivo de desarrollarme como experto en el campo y conseguir empleo en esta área específica.
        </p>
      </div>
    </section>
  );
}
