import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="grid place-items-center py-24 text-center">
      <p className="font-serif text-6xl font-bold text-brand-200">404</p>
      <h1 className="mt-4 text-xl font-semibold text-brand-800">
        Page not found
      </h1>
      <p className="mt-2 text-slate-500">
        That page doesn't exist on the CBM Hub.
      </p>
      <Link
        to="/"
        className="mt-6 rounded-lg bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-800"
      >
        Back to Welcome
      </Link>
    </div>
  );
}
