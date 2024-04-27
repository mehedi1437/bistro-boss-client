import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';


const Login = () => {
    const captchaReff = useRef(null);
    const [disable,setDisable] = useState(true);
    useEffect(()=>{
        loadCaptchaEnginge(6);
    },[])

    const {login} = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from.pathname || '/';
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    const loginInfo = {email,password}
    console.log(loginInfo);
     login(email,password)
     .then(result => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Logged in successfu",
        showConfirmButton: false,
        timer: 1500
      });
      navigate(from , {replace : true});
     })

     .catch(error=>console.log(error))
    
  };
  const handleValidateCaptcha =()=>{
  const userCaptchaValue = captchaReff.current.value;
  if(validateCaptcha(userCaptchaValue)){
    setDisable(false)
  }
  else{
    setDisable(true)
  }
  
  }
  return (
    <div>
      <Helmet>
        <title>Bistro Boss || Login </title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
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
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  ref={captchaReff}
                  placeholder="type captcha"
                  name="captcha"
                  className="input input-bordered"
                  
                />
                <button onClick={handleValidateCaptcha} className='btn btn-outline btn-xs my-2'>validat captcha</button>
              </div>
              <div className="form-control mt-6">
                {/* TODO : apply disable for re captcha  */}
                <input
                disabled={false}
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
              <p>new here ? <span className='text-blue-500'><Link to='/sign-up'>Please Sign up</Link></span></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
