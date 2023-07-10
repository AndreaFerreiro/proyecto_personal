import '../styles/layout/footer.scss';
import Logo3 from '../images/LogoAlmacenNegro2.png';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__containertext">
        <p className="footer__containertext--paragraph">
          Tu almacén virtual &copy;2023
        </p>
      </div>
      <div className="footer__containerimg">
        <img
          className="footer__containerimg--logo"
          src={Logo3}
        />
      </div>
    </footer>
  );
};
export default Footer;