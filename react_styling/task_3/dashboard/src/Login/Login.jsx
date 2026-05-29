import WithLogging from '../HOC/WithLogging';

function Login() {
  return (
    <div className="border-t-2 border-[var(--main-color)] px-8 py-10">
      <p className="mb-6">
        Login to access the full dashboard
      </p>

      <div className="flex flex-wrap items-center gap-3">
        <label htmlFor="email">
          Email:
        </label>

        <input
          type="email"
          id="email"
          name="email"
          className="border border-gray-400 rounded px-2 py-1"
        />

        <label htmlFor="password">
          Password:
        </label>

        <input
          type="password"
          id="password"
          name="password"
          className="border border-gray-400 rounded px-2 py-1"
        />

        <button
          type="button"
          className="border border-gray-400 rounded px-3 py-1"
        >
          OK
        </button>
      </div>
    </div>
  );
}

export default WithLogging(Login);
