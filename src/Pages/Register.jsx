import { useContext } from "react";
import Navbar from "../Components/Navbar";
import { AuthContext } from "../Components/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Successfully Registered");
        updateUser(name);
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        toast.error(err.message);
      });
  };
  return (
    <div className="bg-dark-7 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <Navbar></Navbar>
        <div className="md:w-3/4 mx-auto bg-white p-10 rounded-md -mt-8">
          <h1 className="text-4xl text-dark-2 font-medium text-center my-5">
            Register
          </h1>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label htmlFor="name" className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                placeholder="Name"
                name="name"
                className="input input-bordered"
                id="name"
                required
              />
            </div>
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

export default Register;
