import "./Footer.less";
import useTrailingText from "../../hooks/useTrailingText";
import config from "../../config/config.json";

function Footer() {
    const headerText = useTrailingText(config.trailingText);
    return (
        <div className="footer">
            <div className="left left-container">
                <div className="left">
                    <span className="name">MASON WATSON</span>
                    <div className="title">
                        <span>Software En{headerText}</span>
                        <span className="blinking-cursor" />
                    </div>
                </div>
                <div className="right">
                    <span>Austin, Texas</span>
                    <span>masonxwork@gmail.com</span>
                </div>
            </div>
            <div className="right right-container">
                <ul>
                    <li>
                        <span>01</span>
                        <strong>&emsp;about</strong>
                    </li>
                    <li>
                        <a
                            className="social-link link"
                            href="https://github.com/masonwatson"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span>02</span>
                            <strong>&ensp; resume</strong>
                        </a>
                    </li>
                    <li>
                        <a
                            className="social-link link"
                            href="https://github.com/masonwatson"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span>03</span>
                            <strong>&ensp; github</strong>
                        </a>
                    </li>
                    <li>
                        <a
                            className="social-link link"
                            href="https://www.linkedin.com/in/masonxw/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span>04</span>
                            <strong>&ensp; linkedin</strong>
                        </a>
                    </li>
                    <li>
                        <a
                            className="social-link link"
                            href="https://twitter.com/mxwcode"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span>05</span>
                            <strong>&ensp; twitter</strong>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;