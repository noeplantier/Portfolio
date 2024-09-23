
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Contact Information</h3>
          <p>Email: <a href="mailto:plantiernoe50@gmail.com">plantiernoe50@gmail.com</a></p>
          <p>Phone: <a href="tel:+33666167788">0666167788</a></p>
          <p>Location: Bordeaux, France</p>
        </div>

        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li>Fullstack Web Development</li>
            <li>Mobile Development</li>
            <li>UI/UX Design</li>
            <li>API Integration</li>
            <li>SEO Optimization</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Social Networks</h3>
          <ul className="footer-social">
            <li><a href="https://github.com">GitHub</a></li>
            <li><a href="https://linkedin.com">LinkedIn</a></li>
            <li><a href="https://twitter.com">Twitter</a></li>
            <li><a href="https://www.dev.to">Dev.to</a></li>
            <li><a href="https://stackoverflow.com">Stack Overflow</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Client Resources</h3>
          <ul>
            <li><a href="https://www.w3schools.com">W3Schools</a></li>
            <li><a href="https://developer.mozilla.org">MDN Web Docs</a></li>
            <li><a href="https://getbootstrap.com">Bootstrap Documentation</a></li>
            <li><a href="https://reactjs.org">React Documentation</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Noé Plantier. All rights reserved.</p>
      </div>
    </footer>
  );
}
