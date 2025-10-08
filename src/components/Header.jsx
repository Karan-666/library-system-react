
import {Link} from "react-router-dom";

function Header(){
    return(
        // ALl navigation links will go here
        <nav>
            <ul>
                <Link to="/">  <li>Home</li> </Link>
                <Link to="/browse"><li>Browse Books</li></Link>
                <Link to="/add"><li>Add book</li></Link>
            </ul>
        </nav>
    )
}

export default Header;