import { footer } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <p className="footer__copyright">
        &copy; {footer.copyright}
      </p>
      <a href="#hero" className="footer__top" aria-label="Back to top">
        Back to top ↑
      </a>
      <div className="footer__visits" aria-label="Page visits">
        <span className="pulse pulse--sm" aria-hidden="true" />
        <b>{footer.visitsLabel}</b>
      </div>
    </footer>
  );
}
