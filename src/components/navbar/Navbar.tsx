import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="absolute w-full p-4 flex items-center justify-between z-50">
            <Link to={'/'}>
                <h1 className="uppercase text-red-600 cursor-pointer text-5xl">Netflix</h1>
            </Link>
            <div>
                <Link to={'/login'}>
                    <button className="capitalize pr-4">Login</button>
                </Link>
                <Link to={'/signup'}>
                    <button className="capitalize bg-red-600 px-6 py-2 rounded cursor-pointer">
                        SignUp
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
