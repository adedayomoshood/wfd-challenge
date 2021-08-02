import Brand from './Brand';
import MainNav from './MainNav';

const Header = () => {
  return (
    <header className="header">
      <section className="wrapper">
        <Brand />
        <MainNav />
      </section>
    </header>
  );
};

export default Header;
