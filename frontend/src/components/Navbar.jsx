import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    return (
        <nav>
            <Link to="/stores">Stores</Link>
            <Link to="/admin">Admin</Link>
            <Link to="/owner">Owner</Link>
            <button onClick={logout}>Logout</button>
        </nav>
    );
}