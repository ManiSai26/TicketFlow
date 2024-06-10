import OnboardingBox from "../Components/OnboardingBox";
import "../Stylesheets/Onboardingscreen.css";
function Onboardingscreen()
{
    return(
        <div className="osMain">
            <div className="osContent">
                <OnboardingBox/>
            </div>
        </div>
    );

}
export default Onboardingscreen;