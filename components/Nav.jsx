import Link from "next/link";
import { useRouter } from "next/router";
import ROUTES from "../routes";

const Nav = () => {
  const router = useRouter();

  const classes = {
    menuItem: `ml-8 text-sm cursor-pointer font-extrabold hover:text-indigo-600 py-2 transition duration-300`,
  };

  return (
    <div className="px-5 md:px-12 w-screen flex items-center justify-between py-3 bg-gray-100 dark:bg-gray-800">
      <div>
        <img src="images/logo-dark.png" alt="logo" className="w-8" />
      </div>
      <div>
        {ROUTES.map((route) =>
          route.pathname !== router.pathname ? (
            <Link href={route.pathname}>
              <a className={classes.menuItem}>{route.label}</a>
            </Link>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Nav;
