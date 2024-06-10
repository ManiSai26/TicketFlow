import "../Stylesheets/Onboardingbox.css";
import Button from "./Button";
import Cofeecomponent from "./Cofeecomponent";
const OnboardingBox = () => {
    return (
        <div className="obMain">
            <div className="obGrillMain">
                <div className="obGrill"></div>
                <div className="obGrill"></div>
                <div className="obGrill"></div>
                <div className="obGrill"></div>
            </div>
            <div className="obIgnoremain">
                <div className="obIgnoreContent">
                    <span>Ignore</span>
                </div>
            </div>
            <div className="obMainHead">
                <span>Set up your</span>
            </div>
            <Cofeecomponent/>
            <div className="obFormMain">
                <div className="onInputContainer">
                    <span>Email address</span>
                    <input type="text" id="email" className="inputBox" placeholder="Enter your email"/>
                </div>
                <div className="onInputContainer">
                    <span>Password</span>
                    <input type="text" id="Password" className="inputBox" placeholder="create a password"/>
                </div>
                <div className="onInputContainer">
                    <span>Confirm password</span>
                    <input type="text" id="rePassword" className="inputBox" placeholder="Re-enter your password"/>
                </div>
            </div>
            <div className="obButtonsmain">
                <Button buttonname="Cancel"/>
                <Button buttonname="Continue"/>
            </div>
        </div>
    );
}

export default OnboardingBox;