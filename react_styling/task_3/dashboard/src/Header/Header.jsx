import holbertonLogo from '../assets/holberton-logo.jpg';

function Header() {
  return (
    <div className="flex items-center border-b-2 border-[var(--main-color)]">
      <img
        src={holbertonLogo}
        alt="holberton logo"
        className="w-[200px]"
      />

      <h1 className="text-[32px] font-bold text-[var(--main-color)]">
        School dashboard
      </h1>
    </div>
  );
}

export default Header;
