import Link from "next/link"
import { MdAddTask, MdOutlineTaskAlt, MdOutlineSpaceDashboard, MdOutlineAccountBalance } from "react-icons/md";
import { FiFolderPlus, FiFolder, FiUsers, FiUserPlus } from "react-icons/fi";
import { LuFolderPlus, LuFolders } from "react-icons/lu"

export default function NavBar() {
    return (
        <div className="h-screen bg-background text-white flex flex-col border-r-1 border-hoverSessions text-sm">

            {/* MOBILE */}
            <nav className="flex flex-col md:hidden w-auto">
                <nav className="flex justify-center items-center px-2 py-3 cursor-default border-b-2 border-hoverSessions">
                    <MdOutlineAccountBalance size={25} />
                </nav>

                <Link href="#" className="nav-mobile">
                    <MdOutlineSpaceDashboard size={25} />
                </Link>

                <Link href="#" className="nav-mobile">
                    <FiUserPlus size={25} />
                </Link>

                <Link href="#" className="nav-mobile">
                    <FiUsers size={25} />
                </Link>

                <Link href="#" className="nav-mobile">
                    <LuFolderPlus size={25} />
                </Link>

                <Link href="#" className="nav-mobile">
                    <LuFolders size={25} />
                </Link>

                <Link href="#" className="nav-mobile">
                    <MdAddTask size={25} />
                </Link>

                <Link href="#" className="nav-mobile">
                    <MdOutlineTaskAlt size={25} />
                </Link>
            </nav>

            {/* DESKTOP */}
            <div className="hidden md:flex w-50 h-full flex-col">
                <nav className="flex justify-center gap-2 items-center text-xl px-2 py-4 cursor-default border-b border-hoverSessions">
                    <MdOutlineAccountBalance size={30} />
                    ADVMANAGE
                </nav>
                <nav className="space-y-2">
                    <Link href="#" className="nav-desktop">
                        <MdOutlineSpaceDashboard size={30} />
                        Dashboard
                    </Link>

                    <Link href="#" className="nav-desktop">
                        <FiUserPlus size={30} />
                        Novo Cliente
                    </Link>

                    <Link href="#" className="nav-desktop">
                        <FiUsers size={30} />
                        Clientes
                    </Link>

                    <Link href="#" className="nav-desktop">
                        <LuFolderPlus size={30} />
                        Novo Processo
                    </Link>

                    <Link href="#" className="nav-desktop">
                        <LuFolders size={30} />
                        Processos
                    </Link>

                    <Link href="#" className="nav-desktop">
                        <MdAddTask size={30} />
                        Nova Tarefa
                    </Link>

                    <Link href="#" className="nav-desktop">
                        <MdOutlineTaskAlt size={30} />
                        Tarefas
                    </Link>
                </nav>
            </div>
        </div>
    )
}
