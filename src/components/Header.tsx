import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <div className="flex flex-row items-center justify-between p-4 bg-teal-800 ">
            <div className="flex flex-row items-center space-x-4">
                <Link to='/'>
                    <img src="/favicon.ico" alt="Logo" className="h-8" />
                </Link>
                <h1 className=" text-white text-2xl font-semibold">
                    <Link to='/'>Pressupostos</Link>
                </h1>
            </div>
            <nav className="flex flex-row items-end">
                <ul className="flex flex-row space-x-8 text-white text-xl">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/features-page'>Productes</Link></li>
                </ul>
            </nav>
        </div>
    )
};