
import {Link} from "react-router-dom";

function Header(){
    return(
        // ALl navigation links will go here
        <nav className="bg-[#111112]/95 backdrop-blur-md p-4 w-full fixed top-0 z-20">
            {/* justify-start -> This tells the browser to push all the items to the beginning of the container. */}
            <ul className="flex justify-start gap-4">
                <Link to="/" className="text-white hover:text-[#4EDCD8]">  <li>Home</li> </Link>
                <Link to="/browse" className="text-white hover:text-[#4EDCD8]"><li>Browse Books</li></Link>
                <Link to="/add" className="text-white hover:text-[#4EDCD8]"><li>Add book</li></Link>
            </ul>
        </nav>
    )
}

export default Header;