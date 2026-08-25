import "../style/App.css";
import { Link } from 'react-router-dom';
import logo from "../src/assets/logoHRnet.webp"


export default function Header() {
  return <div className="flex between">  
    
<div className="BlocHeader">
    <img className="logo" src={logo} alt="HRnet logo" />
</div >
         
<div className="linkHeader">
     <Link className="textlink" to="/current">Current Employees</Link>
   <Link className="iconHome" to="/" aria-label="Accueil"><i className="fa fa-home"></i></Link>  
</div>
   
   
   
    
    </div>;
}
