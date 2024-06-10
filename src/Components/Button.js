import "../Stylesheets/Button.css";
const Button = (props) => {
    return ( 
        <div className="ButtonMain">
            <button>{props.buttonname}</button>
        </div>
     );
} 
export default Button;