import './styles/main.css';

const NavBar = () => {
  return (
    <div className="fixed top-[50px] right-[calc(50vw-650px)] z-40 flex items-center justify-center gap-[10px]">
      <a
        className="link flex h-[48px] items-center justify-center px-5"
        href="/slides"
      >
        <h2>SLIDES</h2>
      </a>
      <a
        href="/cards"
        className="link flex h-[48px] items-center justify-center px-5"
      >
        <h2>CARDS</h2>
      </a>
      <a
        href="/text-hover"
        className="link flex h-[48px] items-center justify-center px-5"
      >
        <h2>TEXT HOVER</h2>
      </a>
      <a
        href="/parallax"
        className="link flex h-[48px] items-center justify-center px-5"
      >
        <h2>PARALLAX</h2>
      </a>
    </div>
  );
};

export default NavBar;
