import { church } from "../../lib/content";
import SocialLinks from "../ui/SocialLinks";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            {church.name}
            <p>{church.vision}</p>
            <SocialLinks />
          </div>
          <div className="footer-cols">
            <div className="footer-col">
              <h5>Church</h5>
              <ul>
                <li>
                  <a href="#about">Our Vision</a>
                </li>
                <li>
                  <a href="#services">Weekly Services</a>
                </li>
                <li>
                  <a href="#ministries">Ministries</a>
                </li>
                <li>
                  <a href="#pastor">Leadership</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Connect</h5>
              <ul>
                <li>
                  <a href="#visit">Plan a Visit</a>
                </li>
                <li>
                  <a href={church.facebookUrl} target="_blank" rel="noreferrer">
                    Facebook — {church.facebook}
                  </a>
                </li>
                <li>
                  <a href={church.youtubeUrl} target="_blank" rel="noreferrer">
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {church.name}, {church.branch}. All rights reserved.</span>
          <span>Isaiah 64:8</span>
        </div>
      </div>
    </footer>
  );
}
