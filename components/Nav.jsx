import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import ROUTES from "../routes";

const Nav = () => {
  const router = useRouter();
  const classes = {
    menuItem: `ml-8 text-sm cursor-pointer font-extrabold hover:text-indigo-600 py-2 transition duration-300`,
  };

  return (
    <div className="px-5 md:px-12 flex items-center justify-between py-5 bg-gray-100 dark:bg-gray-800">
      <Image
        width={32}
        height={32}
        src="/images/logo-dark.png"
        alt="logo"
        className="w-8 invert"
      />
      <div>
        {ROUTES.map((route) => {
          return (
            <Link href={route.pathname} key={route.label}>
              <a
                className={
                  classes.menuItem +
                  (route.pathname === router.pathname ? " text-indigo-600" : "")
                }
              >
                {route.label}
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Nav;
