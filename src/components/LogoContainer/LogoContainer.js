import logo from "../../assets/logo.png";
import "./LogoContainer.css"

function LogoContainer() {
    return (
    <div className="header-logo">
        <img src={logo} className="logo" alt="logo" width={150} height={150}/>
        <h1>
            Reddit
        </h1>
    </div>
    )
}

export default LogoContainer;