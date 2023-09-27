import {Bar, Img,Link,Span} from "../homeBar/styled.js"
import Icon from "../../../assets/user_Icon.png"
import Logo_Home from "../../../assets/logo_2.png"
import { IoLogOutOutline } from 'react-icons/io5'
import {BsFillPersonFill} from 'react-icons/bs'
import { useNavigate } from "react-router-dom/dist";
import { useProtectedPage } from "../../../hooks/useProtected.js"

const NavBar = () => {
const navigate = useNavigate();
    const handleClick = () => {
        window.localStorage.clear();
        navigate("/");
    }
    return (
        <Bar>
            <Img src={Logo_Home} alt="TableTales" />
            <ul>
                <li>
                    <Link to="/forum">Forum</Link> 
                </li>
                <li>
                    <BsFillPersonFill/> 
                </li>
                <li>
                    <Span onClick={()=>handleClick()}> log out<IoLogOutOutline /> </Span>
                </li>
            </ul>
                
         
           
      </Bar>
    )
}
export default NavBar;