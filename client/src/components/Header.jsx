import { Link } from "react-router-dom";
export default function header() {
  return (
    <div className="bg bg-slate-200">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3 ">
        <Link to="/">
          <h1 className="font-bold">Header</h1>
        </Link>
        <ul className="flex gap-4">
          <Link to="/">
            <li>Home</li>
          </Link>

          <Link to="/">
            <li>About</li>
          </Link>

          <Link to="/">
            <li>Profile</li>
          </Link>

          <Link to="/">
            <li>Signin</li>
          </Link>

          <Link to="/">
            <li>Signup</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
