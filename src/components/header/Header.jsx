import React from "react";
import { Logo, Container, Logoutbtn } from "../index";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const authstatus = useSelector((state) => state.auth.isAuthenticating);
  const navigate = useNavigate();

  const navitems = [
    {
      name: "home",
      slug: "/",
      active: true,
    },
    {
      name: "signup",
      slug: "/signup",
      active: !authstatus,
    },
    {
      name: "login",
      slug: "/login",
      active: !authstatus,
    },
    {
      name: "All posts",
      slug: "/all-posts",
      active: authstatus,
    },
    {
      name: "All post",
      slug: "/all-post",
      active: authstatus,
    },
  ];

  return (
    <header  className='py-3 shadow bg-gray-500'>
      <Container>
        <nav className="flex">
          <div className="ml-4">
            
              <Link to="/">
                <Logo />
              </Link>
          </div>
           
              <ul className="flex ml-auto">
                {navitems.map((item) =>
                  item.active ? (
                    <li key={item.name}>
                      <button
                        className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                        onClick={() => navigate(item.slug)}
                      >
                        {item.name}
                      </button>
                    </li>
                  ) : null
                )}
                {authstatus && (
                  <li>
                    <Logoutbtn />
                  </li>
                )}
              </ul>
            
          
        </nav>
      </Container>
    </header>
  );
};

export default Header;
