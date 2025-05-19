import { Link, NavLink } from "react-router";
import { sidebarItems } from "../app/constants";
import { cn } from "../app/lib/utils";

const NavItems = () => {
  return (
    <section className="nav-items">
      <Link to="/" className="link-logo">
        <img src="/assets/icons/logo.svg" alt="logo" className="size-[30px]" />
        <h1>Arash-Tour</h1>
      </Link>

      <div className="containe">
        <nav>
          {sidebarItems.map(({ id, href, icon, label }) => (
            <NavLink
              key={id}
              to={href}
              className={({ isActive }) =>
                cn("group nav-item", isActive && "bg-primary-100 text-white")
              }
            >
              {({ isActive }) => (
                <>
                  <img
                    src={icon}
                    alt={label}
                    className={cn(
                      "group-hover:brightness-0 size-0 group-hover:invert",
                      isActive ? "brightness-0 invert" : "text-dark-200"
                    )}
                  />
                  {label}
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </div>
    </section>
  );
};
export default NavItems;
