import holbertonLogo from '../assets/holberton-logo.jpg';

function Header() {
  return (
    <div className="flex items-center gap-6 px-8 py-4 border-b-2 border-[var(--main-color)]">
      <img
        src={holbertonLogo}
        alt="holberton logo"
        className="w-48"
      />

      <h1 className="text-4xl font-bold text-[var(--main-color)]">
        School dashboard
      </h1>
    </div>
  );
}

export default Header;
