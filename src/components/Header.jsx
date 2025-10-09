
import {Link} from "react-router-dom";

function Header(){
    return(
        // ALl navigation links will go here
        <nav className="bg-gray-900 p-4">
            {/* justify-start -> This tells the browser to push all the items to the beginning of the container. */}
            <ul className="flex justify-start gap-4">
                <Link to="/" className="hover:text-blue-400">  <li>Home</li> </Link>
                <Link to="/browse" className="hover:text-blue-400"><li>Browse Books</li></Link>
                <Link to="/add" className="hover:text-blue-400"><li>Add book</li></Link>
            </ul>
        </nav>
    )
}

export default Header;