import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
  const { singIn } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    e.target.reset();

    // singIn user
    singIn(email, password)
      .then((res) => console.log(res.user))
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="mt-20">
        <h1 className="text-center text-4xl font-semibold">
          Login Your Account
        </h1>
        {/* Form */}
        <form
          onSubmit={handleLogin}
          className="card-body  md:w-3/4 lg:w-1/2 mx-auto"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="text-center">
          Do not have an account?{" "}
          <Link to="/register" className="text-blue-700 font-bold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
