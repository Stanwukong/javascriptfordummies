import Footer from "./Footer";
import Navbar from "./Navbar";

const Layouts = ({ children }) => {
	return ( 
		<div className="content">
			<Navbar/>
			{ children }
			<Footer />
		</div>
	 );
}
 
export default Layouts;