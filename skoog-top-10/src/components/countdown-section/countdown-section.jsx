import SectionWrapper from "../section-wrapper/section-wrapper";
import Profile from "../profile/profile";
import Countdown from "../countdown/countdown"
import config from "../../assets/configuration.json";

import "./countdown-section.css";

const CountdownSection = () => {
    const deadline = config.nextToRelease.deadline;
    const member = config.members.find(x => x.name === config.nextToRelease.name);

    return (
        <div className="countdown-section">
            <SectionWrapper>
                <div>
                    <div className="countdown-section-title">Next release 🚀</div>
                    <Profile className={"countdown-section-profile"} name={member?.name} img={member?.img} />
                    <div className="countdown-section-countdown-container">
                        <span className="countdown-section-countdown-title">Time until next reveal</span>
                        <Countdown targetDate={deadline} />
                    </div>
                </div>
            </SectionWrapper>
        </div>
    )
}

export default CountdownSection;