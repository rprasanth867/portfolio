import { footer, personalInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <p className="footer__copyright">
        &copy; {footer.copyrightYear} {personalInfo.name} — {personalInfo.location}
      </p>
      <a href="#home" className="footer__top" aria-label="Back to top">
        Back to top ↑
      </a>
    </footer>
  );
}
