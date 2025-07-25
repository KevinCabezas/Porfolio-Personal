export default function Habilidades() {
  const cards = [
    {
      imagen: "https://www.adslzone.net/app/uploads/2020/01/Percentil.jpg",
      titulo: "E-commers-1",
      descripcion: "Tienda online desarrollada con React.js (Frontend) y Node.js + Express (Backend), con autenticación segura (JWT), carrito de compras dinámico y pasarela de pagos integrada (Stripe/MercadoPago).",
      iconos: ["ico1.png", "ico2.png", "ico3.png", "ico4.png"]
    },
    {
      imagen: "https://d1ih8jugeo2m5m.cloudfront.net/2023/11/banhi-organizar-tienda-de-ropa.png",
      titulo: "E-commers-2",
      descripcion: "Tienda online desarrollada con React.js (Frontend) y Node.js + Express (Backend), con autenticación segura (JWT), carrito de compras dinámico y pasarela de pagos integrada (Stripe/MercadoPago).",
      iconos: ["ico5.png", "ico2.png", "ico3.png", "ico4.png"]
    },
    {
      imagen: "https://th.bing.com/th/id/R.0e5e8590b2d035a74ebd5f832c7bb10d?rik=u65%2fwahIvlQZFg&pid=ImgRaw&r=0",
      titulo: "E-commers-3",
      descripcion: "Tienda online desarrollada con React.js (Frontend) y Node.js + Express (Backend), con autenticación segura (JWT), carrito de compras dinámico y pasarela de pagos integrada (Stripe/MercadoPago).",
      iconos: ["ico1.png", "ico2.png", "ico3.png", "ico4.png"]
    },
    {
      imagen: "https://viagenspelomundo.com.br/wp-content/uploads/2023/03/aplicativos-para-viagens-airbnb-768x480.jpg",
      titulo: "E-commers-4",
      descripcion: "Tienda online desarrollada con React.js (Frontend) y Node.js + Express (Backend), con autenticación segura (JWT), carrito de compras dinámico y pasarela de pagos integrada (Stripe/MercadoPago).",
      iconos: ["ico1.png", "ico2.png", "ico3.png", "ico4.png"]
    }
  ]

  return (
    <section
      id="proyectos"
      className="min-h-screen bg-fondoUno text-white pt-24 pb-8 flex flex-col items-center gap-8"
    >
      <h2 className="text-4xl font-medium text-purple-500">Proyectos</h2>
      <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-6xl `}>
        {cards.map((card, index) => (
          <div
            key={index}
            className=" text-black rounded-lg overflow-hidden shadow-md flex flex-col" //overflow-hidden
          >
            <div className="h-40 bg-gray-400">
              <img src={card.imagen} alt="" className="w-full h-full object-cover" />
            </div>

            <div className="bg-gradient-to-t from-purple-200 to-purple-50 p-3 space-y-3 ">
              <h3 className="font-semibold text-lg">
                {card.titulo}
              </h3>
              <p className="text-[10px]">{card.descripcion}</p>
              <div className="flex items-center gap-4">
                {card.iconos.map((icon, index) => (
                  <img key={index} src={`/icons/${icon}`} alt={`icon-${index}`} className="w-5 h-5" />
                ))}
                <button className="bg-purple-400 text-white rounded w-full">Ver Más</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="bg-cyan-300 text-black font-semibold px-6 py-2 rounded hover:bg-cyan-200 transition">
        Ver Más
      </button>
    </section>
  );
}
