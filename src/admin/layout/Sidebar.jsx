import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import {
  LayoutDashboard,
  FileText,
  BookOpen,
  GraduationCap,
  Newspaper,
  FolderOpen,
  Users,
  Settings,
  LogOut,
  ChevronDown,
  ChevronRight,
  BookMarked,
  X,
} from "lucide-react";


const Sidebar = ({
  sidebarOpen,
  setSidebarOpen,
}) => {

  const navigate = useNavigate();

  const [openMenu, setOpenMenu] = useState("");



  const toggleMenu = (menu) => {

    setOpenMenu(
      openMenu === menu ? "" : menu
    );

  };



  const handleLogout = () => {

    const confirmLogout = window.confirm(
      "Are you sure you want to logout?"
    );


    if(!confirmLogout) return;


    localStorage.removeItem("adminToken");
    localStorage.removeItem("admin");

    navigate("/admin/login");

  };



  const closeSidebar = () => {

    setSidebarOpen(false);

  };



  const menuClass =
  "flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-orange-100 transition cursor-pointer";



  const subMenuClass =
  "block ml-10 px-3 py-2 rounded-lg text-gray-600 hover:bg-orange-50 hover:text-orange-500 transition";



  const activeSubMenu =
  "block ml-10 px-3 py-2 rounded-lg bg-orange-100 text-orange-600 font-semibold";



  return (

    <>

      {/* Overlay */}

      {
        sidebarOpen && (

          <div

            className="
            fixed inset-0
            bg-black/40
            z-40
            lg:hidden
            "

            onClick={closeSidebar}

          />

        )
      }



      <aside

        className={`
        
        fixed top-0 left-0
        z-50
        w-72
        h-screen
        bg-white
        border-r
        shadow-lg
        
        flex flex-col
        
        transform
        transition-transform
        duration-300
        
        ${
          sidebarOpen
          ?
          "translate-x-0"
          :
          "-translate-x-full"
        }

        lg:translate-x-0

        `}

      >


        {/* Logo */}

        <div
          className="
          h-20
          flex
          items-center
          justify-between
          border-b
          px-5
          "
        >

          <div className="flex items-center">


            <BookMarked

              size={28}

              className="
              text-orange-500
              mr-2
              "

            />


            <h1

              className="
              text-2xl
              font-bold
              text-orange-500
              "

            >

              Study Admin

            </h1>


          </div>



          <button

            onClick={closeSidebar}

            className="
            lg:hidden
            "

          >

            <X size={24}/>

          </button>


        </div>





        {/* Navigation */}

        <nav

          className="
          flex-1
          overflow-y-auto
          p-4
          "

        >



          {/* Dashboard */}

          <NavLink

            to="/admin/dashboard"

            onClick={closeSidebar}

            className={({isActive})=>

            `
            flex
            items-center
            gap-3
            px-4
            py-3
            rounded-lg
            mb-2
            
            ${
              isActive
              ?
              "bg-orange-500 text-white"
              :
              "hover:bg-orange-100"
            }
            `

            }

          >

            <LayoutDashboard size={20}/>

            Dashboard


          </NavLink>





          <p className="
          text-xs
          uppercase
          text-gray-400
          mt-6
          mb-2
          px-2
          ">

            Content

          </p>






          {/* Articles */}

          <div>


            <button

              onClick={()=>toggleMenu("articles")}

              className={menuClass}

            >

              <span className="flex items-center gap-3">

                <FileText size={20}/>

                Articles

              </span>


              {
                openMenu==="articles"
                ?
                <ChevronDown size={18}/>
                :
                <ChevronRight size={18}/>
              }


            </button>



            {
              openMenu==="articles" && (

                <div className="mt-2 space-y-1">


                  <NavLink

                    to="/admin/articles/add"

                    onClick={closeSidebar}

                    className={({isActive})=>
                    isActive
                    ?
                    activeSubMenu
                    :
                    subMenuClass
                    }

                  >

                    Add Article

                  </NavLink>




                  <NavLink

                    to="/admin/articles/manage"

                    onClick={closeSidebar}

                    className={({isActive})=>
                    isActive
                    ?
                    activeSubMenu
                    :
                    subMenuClass
                    }

                  >

                    Manage Articles

                  </NavLink>


                </div>

              )
            }



          </div>







          {/* Notes */}

          <div className="mt-2">


            <button

              onClick={()=>toggleMenu("notes")}

              className={menuClass}

            >

              <span className="flex items-center gap-3">

                <BookOpen size={20}/>

                Notes

              </span>


              {
                openMenu==="notes"
                ?
                <ChevronDown size={18}/>
                :
                <ChevronRight size={18}/>
              }


            </button>



            {
              openMenu==="notes" && (

                <div className="mt-2 space-y-1">


                  <NavLink

                    to="/admin/notes/add"

                    onClick={closeSidebar}

                    className={({isActive})=>
                    isActive
                    ?
                    activeSubMenu
                    :
                    subMenuClass
                    }

                  >

                    Add Notes

                  </NavLink>



                  <NavLink

                    to="/admin/notes/manage"

                    onClick={closeSidebar}

                    className={({isActive})=>
                    isActive
                    ?
                    activeSubMenu
                    :
                    subMenuClass
                    }

                  >

                    Manage Notes

                  </NavLink>


                </div>

              )
            }


          </div>







          {/* Syllabus */}

          <div className="mt-2">


            <button

              onClick={()=>toggleMenu("syllabus")}

              className={menuClass}

            >

              <span className="flex items-center gap-3">

                <GraduationCap size={20}/>

                Syllabus

              </span>


              {
                openMenu==="syllabus"
                ?
                <ChevronDown size={18}/>
                :
                <ChevronRight size={18}/>
              }


            </button>



            {
              openMenu==="syllabus" && (

                <div className="mt-2 space-y-1">


                  <NavLink
                    to="/admin/syllabus/add"
                    onClick={closeSidebar}
                    className={({isActive})=>
                    isActive
                    ?
                    activeSubMenu
                    :
                    subMenuClass
                    }
                  >
                    Add Syllabus
                  </NavLink>


                  <NavLink
                    to="/admin/syllabus/manage"
                    onClick={closeSidebar}
                    className={({isActive})=>
                    isActive
                    ?
                    activeSubMenu
                    :
                    subMenuClass
                    }
                  >
                    Manage Syllabus
                  </NavLink>


                </div>

              )
            }



          </div>






          {/* Blogs */}

          <div className="mt-2">


            <button

              onClick={()=>toggleMenu("blogs")}

              className={menuClass}

            >

              <span className="flex items-center gap-3">

                <Newspaper size={20}/>

                Blogs

              </span>



              {
                openMenu==="blogs"
                ?
                <ChevronDown size={18}/>
                :
                <ChevronRight size={18}/>
              }


            </button>



            {
              openMenu==="blogs" && (

                <div className="mt-2 space-y-1">


                  <NavLink

                    to="/admin/blogs/add"

                    onClick={closeSidebar}

                    className={({isActive})=>
                    isActive
                    ?
                    activeSubMenu
                    :
                    subMenuClass
                    }

                  >

                    Add Blog

                  </NavLink>


                  <NavLink

                    to="/admin/blogs/manage"

                    onClick={closeSidebar}

                    className={({isActive})=>
                    isActive
                    ?
                    activeSubMenu
                    :
                    subMenuClass
                    }

                  >

                    Manage Blogs

                  </NavLink>


                </div>

              )
            }



          </div>








          {/* Resources */}

          <p className="
          text-xs
          uppercase
          text-gray-400
          mt-6
          mb-2
          px-2
          ">

            Resources

          </p>



          <NavLink

            to="/admin/upload"

            onClick={closeSidebar}

            className={({isActive})=>

            `
            flex
            items-center
            gap-3
            px-4
            py-3
            rounded-lg
            mb-2
            
            ${
              isActive
              ?
              "bg-orange-500 text-white"
              :
              "hover:bg-orange-100"
            }

            `

            }

          >

            <FolderOpen size={20}/>

            Upload Files

          </NavLink>





          <NavLink

            to="/admin/files"

            onClick={closeSidebar}

            className={({isActive})=>

            `
            flex
            items-center
            gap-3
            px-4
            py-3
            rounded-lg
            
            ${
              isActive
              ?
              "bg-orange-500 text-white"
              :
              "hover:bg-orange-100"
            }

            `

            }

          >

            <FolderOpen size={20}/>

            Manage Files

          </NavLink>






          {/* Administration */}


          <p className="
          text-xs
          uppercase
          text-gray-400
          mt-6
          mb-2
          px-2
          ">

            Administration

          </p>



          <NavLink

            to="/admin/users"

            onClick={closeSidebar}

            className={({isActive})=>

            `
            flex
            items-center
            gap-3
            px-4
            py-3
            rounded-lg
            mb-2
            
            ${
              isActive
              ?
              "bg-orange-500 text-white"
              :
              "hover:bg-orange-100"
            }

            `

            }

          >

            <Users size={20}/>

            Users


          </NavLink>






          <NavLink

            to="/admin/settings"

            onClick={closeSidebar}

            className={({isActive})=>

            `
            flex
            items-center
            gap-3
            px-4
            py-3
            rounded-lg
            
            ${
              isActive
              ?
              "bg-orange-500 text-white"
              :
              "hover:bg-orange-100"
            }

            `

            }

          >

            <Settings size={20}/>

            Settings


          </NavLink>




        </nav>





        {/* Logout */}

        <div className="border-t p-4">


          <button

            onClick={handleLogout}

            className="
            flex
            items-center
            gap-3
            w-full
            px-4
            py-3
            rounded-lg
            text-red-500
            hover:bg-red-50
            transition
            "

          >

            <LogOut size={20}/>

            Logout


          </button>


        </div>



      </aside>


    </>

  );
};


export default Sidebar;