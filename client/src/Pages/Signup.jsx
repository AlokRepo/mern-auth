import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">SignUp</h1>

      <form action="" className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          id="Username"
          className="bg-slate-100 p-3 rounded-lg"
        />
        <input
          type="email"
          placeholder="email"
          id="email"
          className="bg-slate-100 p-3 rounded-lg"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          className="bg-slate-100 p-3 rounded-lg"
        />

        <button className="bg-slate-600  text-white p-3 rounded-lg uppercase hover:opacity-85 disabled:opacity-90">
          Sign Up
        </button>
      </form>
      <div className='flex gap-2 mt-3 '>
        <p>Have an account?</p>
        <Link to ='/signin'>
        <span className="text-blue-600">Sign In</span>
        </Link>
      </div>
    </div>
  );
}
