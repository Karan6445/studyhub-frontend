import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../api/axios";

import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ShieldCheck,
} from "lucide-react";


const AdminRegister = () => {

  const navigate = useNavigate();

  const [showPassword,setShowPassword] = useState(false);

  const [showConfirm,setShowConfirm] = useState(false);

  const [loading,setLoading] = useState(false);


  const [formData,setFormData] = useState({

    name:"",
    email:"",
    password:"",
    confirmPassword:"",

  });



  const handleChange = (e)=>{

    setFormData({

      ...formData,

      [e.target.name]:e.target.value

    });

  };




  const handleSubmit = async(e)=>{

    e.preventDefault();


    if(formData.password !== formData.confirmPassword){

      alert("Passwords do not match");
      return;

    }



    try{

      setLoading(true);


      await api.post(

        "/admin/register",

        {

          name:formData.name,

          email:formData.email,

          password:formData.password,

        }

      );


      alert("Registration Successful");


      navigate("/admin/login");


    }
    catch(error){


      console.log(error);


      alert(

        error.response?.data?.message ||

        "Registration Failed"

      );


    }
    finally{

      setLoading(false);

    }

  };





  return (

    <div

      className="
      min-h-screen
      relative
      overflow-hidden
      flex
      items-center
      justify-center
      px-5
      bg-cover
      bg-center
      "

      style={{

        backgroundImage:
        "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1920&auto=format&fit=crop')"

      }}

    >


      <div

        className="
        absolute
        inset-0
        bg-gradient-to-br
        from-orange-200/40
        via-white/50
        to-amber-200/40
        "

      ></div>



      <div

        className="
        absolute
        -top-24
        -left-24
        w-80
        h-80
        bg-orange-300/40
        rounded-full
        blur-3xl
        animate-pulse
        "

      ></div>



      <div

        className="
        absolute
        -bottom-24
        -right-24
        w-96
        h-96
        bg-amber-300/40
        rounded-full
        blur-3xl
        animate-pulse
        "

      ></div>





      <div

        className="
        relative
        z-10
        w-full
        max-w-md
        bg-white/85
        backdrop-blur-xl
        rounded-3xl
        shadow-2xl
        border
        border-orange-200
        p-8
        "

      >


        <div className="flex justify-center mb-6">


          <div

            className="
            bg-gradient-to-br
            from-orange-400
            to-orange-600
            p-4
            rounded-full
            shadow-xl
            shadow-orange-300/40
            "

          >


            <ShieldCheck

              size={42}

              className="text-white"

            />


          </div>


        </div>





        <h1

          className="
          text-3xl
          font-bold
          text-center
          text-gray-800
          "

        >

          Admin Register

        </h1>




        <p

          className="
          text-center
          text-gray-500
          mt-2
          mb-8
          "

        >

          Create your Study Admin account

        </p>





        <form

          onSubmit={handleSubmit}

          className="space-y-5"

        >



          <div className="relative">

            <User

              size={20}

              className="
              absolute
              left-3
              top-3.5
              text-orange-500
              "

            />


            <input

              type="text"

              name="name"

              placeholder="Full Name"

              value={formData.name}

              onChange={handleChange}

              required


              className="
              w-full
              border
              border-orange-200
              rounded-xl
              pl-11
              pr-4
              py-3
              outline-none
              bg-white/90
              focus:ring-2
              focus:ring-orange-400
              "

            />

          </div>





          <div className="relative">


            <Mail

              size={20}

              className="
              absolute
              left-3
              top-3.5
              text-orange-500
              "

            />


            <input

              type="email"

              name="email"

              placeholder="Email Address"

              value={formData.email}

              onChange={handleChange}

              required


              className="
              w-full
              border
              border-orange-200
              rounded-xl
              pl-11
              pr-4
              py-3
              outline-none
              bg-white/90
              focus:ring-2
              focus:ring-orange-400
              "

            />


          </div>





          <div className="relative">


            <Lock

              size={20}

              className="
              absolute
              left-3
              top-3.5
              text-orange-500
              "

            />


            <input

              type={
                showPassword
                ?
                "text"
                :
                "password"
              }

              name="password"

              placeholder="Password"

              value={formData.password}

              onChange={handleChange}

              required


              className="
              w-full
              border
              border-orange-200
              rounded-xl
              pl-11
              pr-11
              py-3
              outline-none
              bg-white/90
              focus:ring-2
              focus:ring-orange-400
              "

            />



            <button

              type="button"

              onClick={()=>setShowPassword(!showPassword)}

              className="
              absolute
              right-3
              top-3.5
              "

            >

              {
                showPassword
                ?
                <EyeOff size={20}/>
                :
                <Eye size={20}/>
              }

            </button>


          </div>





          <div className="relative">


            <Lock

              size={20}

              className="
              absolute
              left-3
              top-3.5
              text-orange-500
              "

            />


            <input

              type={
                showConfirm
                ?
                "text"
                :
                "password"
              }


              name="confirmPassword"


              placeholder="Confirm Password"


              value={formData.confirmPassword}


              onChange={handleChange}


              required


              className="
              w-full
              border
              border-orange-200
              rounded-xl
              pl-11
              pr-11
              py-3
              outline-none
              bg-white/90
              focus:ring-2
              focus:ring-orange-400
              "

            />



            <button

              type="button"

              onClick={()=>setShowConfirm(!showConfirm)}

              className="
              absolute
              right-3
              top-3.5
              "

            >

              {
                showConfirm
                ?
                <EyeOff size={20}/>
                :
                <Eye size={20}/>
              }


            </button>


          </div>





          <button

            disabled={loading}

            className="
            w-full
            bg-gradient-to-r
            from-orange-500
            to-orange-600
            hover:from-orange-600
            hover:to-orange-700
            text-white
            py-3
            rounded-xl
            font-semibold
            shadow-lg
            transition
            "

          >

            {
              loading
              ?
              "Creating Account..."
              :
              "Register"
            }


          </button>



        </form>





        <div className="text-center mt-6">


          <p className="text-gray-600">

            Already have an account?


            <Link

              to="/admin/login"

              className="
              text-orange-500
              font-semibold
              ml-2
              "

            >

              Login

            </Link>


          </p>


        </div>


      </div>


    </div>

  );

};


export default AdminRegister;