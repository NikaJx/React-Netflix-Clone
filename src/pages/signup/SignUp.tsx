import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

interface Inputs {
  email: string;
  password: string;
}

const SignUp = () => {
  const [rememberLogin, setRememberLogin] = useState<boolean>(true);

  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmitForm: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="w-full h-screen">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/62b66ae8-a3b9-484d-ac2a-5163474e2554/GE-ru-20231218-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt=""
          className="hidden sm:block absolute w-full h-full object-cover"
        />
        <div className="bg-black/70 fixed top-0 left-0 w-full h-screen" />

        <div className="fixed w-full px-4 py-24 z-20">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/80 rounded-lg">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl">Sign Up</h1>

              <form
                onSubmit={handleSubmit(onSubmitForm)}
                className="w-full flex flex-col py-4"
              >
                <input
                  {...register("email", {
                    required: true,
                  })}
                  placeholder="email"
                  autoComplete="email"
                  className="p-3 my-2 bg-gray-700 rounded"
                />
                <input
                  {...register("password", {
                    required: true,
                  })}
                  type="password"
                  placeholder="password"
                  autoComplete="current-password"
                  className="p-3 my-2 bg-gray-700 rounded"
                />
                <button className="bg-red-600 py-3 my-6 rounded ">
                  Sign Up
                </button>

                <div className="flex justify-between items-center text-gray-600">
                  <p>
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={rememberLogin}
                      onChange={() => setRememberLogin(!rememberLogin)}
                    />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="my-4">
                  <span className="text-gray-600 mr-2">
                    Already subscribed to Netflix
                  </span>
                  <Link to={"/login"}>Sign In</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
