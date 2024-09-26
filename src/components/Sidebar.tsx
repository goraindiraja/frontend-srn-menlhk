import { link } from "fs";
import Image from "next/image";
import Link from "next/link";
import {LuBook, LuCheckCircle, LuHelpCircle, LuHome, LuInfo, LuUsers } from "react-icons/lu";

const menuItem = [
    {
        link: "#",
        name: "Beranda",
        icons: <LuHome/>
    },
    {
        link: "#",
        name: "Metodologi",
        icons: <LuBook/>
    },
    {
        link: "#",
        name: "Roster of Expert",
        icons: <LuUsers/>
    },
    {
        link: "#",
        name: "Lembaga Validasi/Verifikasi",
        icons: <LuCheckCircle/>
    },
    {
        link: "#",
        name: "Tentang",
        icons: <LuInfo/>
    },
    {
        link: "#",
        name: "FAQ",
        icons: <LuHelpCircle/>
    }
]

const Sidebar = () => {
    return (
        <aside className="bg-[#042426] w-1/5">
            <div className="fixed flex h-full max-h-screen flex-col gap-2">
                <div className="py-6 px-6">
                    <Image src={"/assets/logo.png"} alt="Logo.png" width={100} height={100} />
                </div>

                <div className="flex-1 mt-2">
                    <nav className="grid items-start px-2 font-medium gap-4">
                        {menuItem.map(item =>{
                            return(
                                <Link
                                    href="#"
                                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-white transition-all hover:text-lightGreen text-sm"
                                >
                                    {item.icons}
                                    {item.name}
                                </Link>
                            )
                        })}
                    </nav>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar