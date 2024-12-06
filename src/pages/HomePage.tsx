import { Link } from "react-router-dom"

export const HomePage = () => {
    return (
        <div className="relative w-full h-screen bg-cover bg-center"
            style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
            }}>
            <div className="absolute inset-0 bg-white opacity-50"></div>
            <div className="relative z-10 flex items-center justify-center h-full">
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-xl text-pretty mx-auto">
                    <h1 className="text-teal-950 text-3xl sm:text-4xl font-bold mb-10 text-center">Bienvenido a Pressupostos DC</h1>
                    <p className="text-base sm:text-lg">En Pressupostos DC, te ayudamos a crear presupuestos para tu sitio web de forma rápida y fácil.</p>
                    <p className="text-base sm:text-lg">Solo tienes que seleccionar las opciones que necesitas, como SEO, publicidad o diseño web, y obtendrás un presupuesto personalizado.</p>
                    <p className="text-base sm:text-lg">Además, podrás guardarlo y asociarlo a tu correo para acceder a él cuando quieras.</p>
                    <h2 className="text-teal-950 text-lg sm:text-xl font-semibold mt-10 text-center">Comienza a crear tu presupuesto hoy mismo.</h2>
                    <div className="flex justify-center mt-10">
                        <Link to='/features-page'>
                            <button className="bg-teal-900 text-white rounded-lg px-8 py-3 sm:px-6 sm:py-2 transition-all duration-300 hover:bg-teal-700">
                                Productes
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    )
}