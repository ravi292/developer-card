import { Outlet, useNavigate } from "react-router-dom"

export default function Navbar() {
    const navigate = useNavigate();
    return (
      <div>
        <button onClick={() => {
            navigate('/')
        }}>Landing Page</button>
        <button onClick={() => {
            navigate('/about')
        }}>About Page</button>
        <Outlet />
      </div>

    )
}

