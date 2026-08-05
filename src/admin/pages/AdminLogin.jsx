import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ShieldCheck,
} from "lucide-react";


const AdminLogin = () => {

  const navigate = useNavigate();


  const [showPassword,setShowPassword] = useState(false);


  const [formData,setFormData] = useState({
    email:"",
    password:"",
  });


  const [loading,setLoading] = useState(false);



  const handleChange = (e)=>{

    setFormData({

      ...formData,

      [e.target.name]:e.target.value

    });

  };





  const handleSubmit = async(e)=>{

    e.preventDefault();


    try{

      setLoading(true);


      const res = await axios.post(
        "http://localhost:5000/api/admin/login",
        formData
      );



      localStorage.setItem(
        "adminToken",
        res.data.token
      );



      localStorage.setItem(
        "admin",
        JSON.stringify(res.data.admin)
      );



      alert("Login Successful");


      navigate("/admin/dashboard");


    }
    catch(error){

      alert(
        error.response?.data?.message ||
        "Login Failed"
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





      {/* Soft Background Overlay */}



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







      {/* Background Glow Effects */}




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








      {/* Login Card */}



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





        {/* Logo */}



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

          Admin Login

        </h1>






        <p

          className="
          text-center
          text-gray-500
          mt-2
          mb-8
          "

        >

          Login to access Study Admin Dashboard

        </p>









        <form

          onSubmit={handleSubmit}

          className="space-y-5"

        >





          {/* Email */}




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


              placeholder="Enter Email"



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
              focus:border-orange-400
              transition
              "

            />


          </div>









          {/* Password */}





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



              placeholder="Enter Password"



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
              focus:border-orange-400
              transition
              "

            />





            <button


              type="button"



              onClick={()=>setShowPassword(!showPassword)}



              className="
              absolute
              right-3
              top-3.5
              text-gray-500
              hover:text-orange-500
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









          {/* Login Button */}





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
            shadow-orange-300/40
            transition
            "

          >


            {

              loading

              ?

              "Logging In..."

              :

              "Login"

            }



          </button>






        </form>









        <div className="text-center mt-6">


          <p className="text-gray-600">


            Don't have an account?



            <Link


              to="/admin/register"



              className="
              ml-2
              text-orange-500
              font-semibold
              hover:text-orange-600
              "

            >

              Register

            </Link>



          </p>



        </div>






      </div>





    </div>

  );

};



export default AdminLogin;