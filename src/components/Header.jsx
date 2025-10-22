import PropTypes from "prop-types";

function Header({ title, image, children }) {
  return (
    <header className="h-4/5 w-full overflow-hidden">
      <div className="header__container">
        <div className="header__container--bg">
          <img src={image} alt="Image" />
        </div>
        <div className="header__content">
          <h2>{title}</h2>
          <p>{children}</p>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  children: PropTypes.node,
};

export default Header;
