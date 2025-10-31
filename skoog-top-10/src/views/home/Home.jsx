import TopBannerComponent from "../../components/top-banner/top-banner";
import CountdownSection from "../../components/countdown-section/countdown-section";
import LatestReleaseSection from "../../components/latest-release-section/latest-release-section";
import ReleaseList from "../../components/release-list/release-list";
import config from "../../assets/configuration.json";
import SectionWrapper from "../../components/section-wrapper/section-wrapper";

import "./home.css"

const Home = () => {
    const releases = config.releases.map(x => x.catergory === "Top 10 Greatest");

    return <div className="home">
        <TopBannerComponent />
        <div className="home-release-section">
            <LatestReleaseSection />
            <CountdownSection />
        </div>
        <div className="home-release-list">
            <ReleaseList catergory={"Movies, Series, and Game Music"} />
            <ReleaseList catergory={"Fall 2025"} />
            <ReleaseList catergory={"Top 10 Best Songs"} />
        </div>
    </div >
}

export default Home;