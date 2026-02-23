import { GithubIcon, InstagramIcon, LinkedinIcon } from "lucide-react";
import { useState } from "react";

function getTodayDate() {
  return new Date().toLocaleDateString("tr-TR");
}

export default function Footer() {
  const [date]=useState(getTodayDate());

  return (
    <footer className="footer">
      <div className="container footer__row">
        <div>
          <div style={{ fontWeight: 800, marginBottom: 6 }}>İletişim</div>
          <small>
            Email: <a href="mailto:furkan@example.com">furkan@example.com</a>
          </small>
          <div>
            <small>Yapılış tarihi: {date}</small>
          </div>
        </div>

        <div>
          <div style={{ fontWeight: 800, marginBottom: 6 }}>Linkler</div>
          <div className="social">
            <a
              className="iconbtn"
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <LinkedinIcon className="icon" />
            </a>

            <a
              className="iconbtn"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              title="Instagram"
            >
              <InstagramIcon className="icon" />
            </a>

            <a
              className="iconbtn"
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <GithubIcon className="icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}