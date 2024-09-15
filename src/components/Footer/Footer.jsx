import "./Footer.less";
import useTrailingText from "../../hooks/useTrailingText";
import config from "../../config/config.json";

function Footer() {
    const headerText = useTrailingText(config.trailingText);
    return (
        <div className="footer">
            <div className="info-container">
                <div className="sub-container">
                    <span className="name">MASON WATSON</span>
                    <div className="title">
                        <span className="info">software en{headerText}</span>
                        <span className="blinking-cursor" />
                    </div>
                </div>
                <div className="sub-container">
                    <span className="info">austin, texas</span>
                    <span className="info">masonxwork@gmail.com</span>
                </div>
            </div>
            <ul className="links-container">
                <li>
                    <span className="link">
                        <span className="link-num">01&ensp;&nbsp;</span>
                        <strong>about</strong>
                    </span>
                </li>
                <li>
                    <a
                        href="https://github.com/masonwatson"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span className="link">
                            <span className="link-num">02&ensp;&nbsp;</span>
                            <strong>resume</strong>
                        </span>
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/masonwatson"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span className="link">
                            <span className="link-num">03&ensp;&nbsp;</span>
                            <strong>github</strong>
                        </span>
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.linkedin.com/in/masonxw/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span className="link">
                            <span className="link-num">04&ensp;&nbsp;</span>
                            <strong>linkedin</strong>
                        </span>
                    </a>
                </li>
                <li>
                    <a
                        href="https://twitter.com/mxwcode"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span className="link">
                            <span className="link-num">05&ensp;&nbsp;</span>
                            <strong>twitter</strong>
                        </span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Footer;