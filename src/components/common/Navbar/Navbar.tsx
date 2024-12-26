import RoutPages from "@/components/shared/Routes";
import { BsPersonWorkspace } from "react-icons/bs";
import { FaBlogger, FaHome } from "react-icons/fa";
import { GrWorkshop } from "react-icons/gr";
import { MdContacts } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="fixed z-10 right-0 top-1/2 -translate-y-1/2 py-6">
      <ul className="flex flex-col gap-4 bg-gray-950 text-white py-4 px-2 pr-6 rounded-full">
      <RoutPages href="/" label="Home" icon={<FaHome />} />
      <RoutPages href="/about" label="About" icon={<BsPersonWorkspace />} />
      <RoutPages href="/portfolio" label="Portfolio" icon={<GrWorkshop />} />
      <RoutPages href="/blog" label="Blog" icon={<FaBlogger />} />
      <RoutPages href="/contact" label="Contact" icon={<MdContacts />} />
    </ul>
    </nav>
  );
};

export default Navbar;