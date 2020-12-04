import "./nav.css"
import { Link } from "react-router-dom"

export const NavBar = () => {
    return (
        <>
            <div className="navBar">
                <ul className="list">
                    <li className="list__item">
                        <Link to="/stickerchart">Sticker Chart</Link>
                    </li>
                    <li className="list__item">
                        <Link to="/prayers">Prayers</Link>
                    </li>
                    <li className="list__item">
                        <Link to="/homework">Homework</Link>
                    </li>
                    <li className="list__item">
                        <Link to="/christmaslist">Christmas List</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}


