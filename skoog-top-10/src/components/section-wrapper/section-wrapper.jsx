import "./section-wrapper.css";

const SectionWrapper = ({ children }) => {
    return <div className="section-wrapper">
        <div className="section-wrapper-container">
            {children}
        </div>
    </div>
}

export default SectionWrapper;