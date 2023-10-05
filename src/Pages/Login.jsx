import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Components/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const { login } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    login(email, password)
      .then((result) => {
        toast.success("Successfully Logged in");
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        toast.error("Invalid Password.");
        console.error(err);
      });
  };

  return (
    <div className="bg-dark-7 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <Navbar></Navbar>
        <div className="md:w-3/4 mx-auto bg-white p-10 rounded-md -mt-8">
          <h1 className="text-4xl text-dark-2 font-medium text-center my-5">
            Login your account
          </h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label htmlFor="email" className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                id="email"
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="password" className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                id="password"
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
          <p className="text-center text-lg text-dark-3">
            Dont’t Have An Account ?
            <Link className="btn btn-link capitalize" to={"/register"}>
              Register
            </Link>
          </p>
          <div>
            <Toaster
              toastOptions={{
                success: {
                  style: {
                    background: "green",
                    color: "white",
                  },
                },
                error: {
                  style: {
                    background: "red",
                    color: "white",
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
