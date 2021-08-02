import { Link } from 'react-router-dom';
import vendorLogo from '../images/vendor.png';
import vendorLogo2x from '../images/vendor@2x.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper">
        <section className="footer__col">
          <section className="brand">DREAMSHARE</section>
        </section>

        <section className="footer__col">
          <h5>Company</h5>
          <nav className="footer__nav">
            <Link to="/">About</Link>
            <Link to="/">Contact</Link>
            <Link to="/">Press</Link>
            <Link to="/">Blog</Link>
            <Link to="/">Terms and Privacy</Link>
            <Link to="/">Help</Link>
          </nav>
        </section>

        <section className="footer__col">
          <h5>Partners</h5>
        </section>

        <section className="footer__col footer__vendor">
          <h6>DESIGNED BY</h6>
          <img
            srcSet={`${vendorLogo}, ${vendorLogo2x} 2x`}
            src={vendorLogo}
            alt="Areto Development"
            width="110px"
            height="24px"
            loading="lazy"
          />
        </section>
      </div>
    </footer>
  );
};

export default Footer;
