import { NavLink } from "react-router-dom";
import Logo from '../assets/Logo.svg'
import Cart from '../assets/cart.svg'
export default function NavBar(){
    //const navigate = useNavigate();

    // function handleLogout() {
    //     localStorage.removeItem("user");
    //     navigate("/login");
    // }

    return (
        <nav className="flex justify-center font-semibold bg-gray-50" >
            <div className="flex justify-between w-11/12 p-4 ">
                <div className="flex justify-center items-center space-x-10">
                    <img src={Logo} alt="Logo" />
                    <NavLink 
                    to="/" 
                    end
                    className={({ isActive }) => isActive ? "active" : ""}
                    >
                    Home
                    </NavLink>
                    <NavLink 
                    to="/listing" 
                    end
                    className={({ isActive }) => isActive ? "active" : ""}
                    >
                    Listing
                    </NavLink>
                    <NavLink 
                    to="/contact" 
                    end
                    className={({ isActive }) => isActive ? "active" : ""}
                    >
                    Contact
                    </NavLink>
                    <NavLink 
                    to="/agents" 
                    end
                    className={({ isActive }) => isActive ? "active" : ""}
                    >
                    Agents
                    </NavLink>
                    <NavLink 
                    to="/about" 
                    end
                    className={({ isActive }) => isActive ? "active" : ""}
                    >
                    About
                    </NavLink>
                    <NavLink 
                    to="/blog" 
                    end
                    className={({ isActive }) => isActive ? "active" : ""}
                    >
                    Blog
                    </NavLink>
                </div>
                <div className="flex justify-center items-center space-x-10">
                    <NavLink 
                    to="/sign_up" 
                    end
                    className={({ isActive }) => isActive ? "active" : ""}
                    >
                    Sign up
                    </NavLink>
                    <button className="bg-[#254B86] text-white px-6 py-2 rounded-xl">Create A Listing</button>
                    <button 
                    className="w-10 h-10 p-2 flex justify-center items-center rounded-full "
                    style={{ boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)' }}
                    ><img src={Cart} className="size-5" alt="cart" /></button>
                </div>
            </div>
            
        </nav>
    );
}