import {
  Bell,
  Search,
  UserCircle,
  Menu,
} from "lucide-react";


const Topbar = ({ setSidebarOpen, admin }) => {


  return (


    <header


      className="
      sticky
      top-0
      z-30
      bg-white/90
      backdrop-blur-xl
      border-b
      border-orange-100
      shadow-sm
      h-16
      lg:h-20
      px-4
      lg:px-8
      flex
      items-center
      justify-between
      "

    >






      {/* Left Section */}



      <div className="flex items-center gap-3">





        {/* Mobile Menu Button */}



        <button


          onClick={()=>setSidebarOpen(true)}


          className="
          lg:hidden
          p-2
          rounded-lg
          hover:bg-orange-50
          text-gray-700
          transition
          "

        >

          <Menu size={24}/>


        </button>







        {/* Welcome Text */}



        <div>



          <h1


            className="
            text-lg
            md:text-xl
            lg:text-2xl
            font-bold
            text-gray-800
            "

          >

            Welcome Back 👋


          </h1>





          <p


            className="
            hidden
            md:block
            text-sm
            text-gray-500
            "

          >

            Manage your StudyHub portal


          </p>



        </div>



      </div>









      {/* Right Section */}



      <div


        className="
        flex
        items-center
        gap-2
        md:gap-4
        "

      >







        {/* Desktop Search */}



        <div


          className="
          hidden
          lg:flex
          items-center
          bg-orange-50
          border
          border-orange-100
          rounded-xl
          px-4
          h-11
          w-72
          focus-within:ring-2
          focus-within:ring-orange-300
          transition
          "

        >



          <Search


            size={18}


            className="text-orange-500"


          />



          <input


            type="text"


            placeholder="Search..."


            className="
            bg-transparent
            outline-none
            ml-3
            w-full
            text-sm
            "

          />



        </div>








        {/* Mobile Search Icon */}



        <button


          className="
          lg:hidden
          p-2
          rounded-lg
          hover:bg-orange-50
          transition
          "

        >

          <Search

            size={21}

            className="text-gray-600"

          />


        </button>









        {/* Notification */}




        <button


          className="
          relative
          p-2
          rounded-full
          hover:bg-orange-50
          transition
          "

        >



          <Bell


            size={22}


            className="text-gray-600"


          />




          <span


            className="
            absolute
            top-1
            right-1
            w-2.5
            h-2.5
            rounded-full
            bg-orange-500
            border-2
            border-white
            "

          ></span>



        </button>









        {/* Profile */}




        <div


          className="
          flex
          items-center
          gap-2
          md:gap-3
          bg-orange-50
          border
          border-orange-100
          px-2
          md:px-3
          py-2
          rounded-xl
          "

        >




          <UserCircle


            size={38}


            className="
            text-orange-500
            md:w-10
            md:h-10
            "

          />





          {/* Hide text on small screen */}



          <div className="hidden sm:block">



            <h4


              className="
              text-sm
              md:text-base
              font-semibold
              text-gray-800
              "

            >

              {admin?.name || "Admin"}


            </h4>





            <p


              className="
              text-xs
              md:text-sm
              text-gray-500
              max-w-[120px]
              truncate
              "

            >

              {admin?.email || "admin@gmail.com"}


            </p>



          </div>




        </div>






      </div>






    </header>


  );

};



export default Topbar;