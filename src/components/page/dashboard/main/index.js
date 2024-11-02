import { MdPerson, MdSpaceDashboard } from "react-icons/md";
import { IoNewspaperSharp } from "react-icons/io5";
import { RiCalendarEventFill } from "react-icons/ri";
import { MdAnnouncement } from "react-icons/md";
import { MdRoomService } from "react-icons/md";
import { MdOutlineSportsKabaddi } from "react-icons/md";
import { FaPeopleRoof } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";
import { MdOutlineAppRegistration } from "react-icons/md";
import { IoPeople } from "react-icons/io5";
import { LiaSchoolSolid } from "react-icons/lia";
import { FiTarget } from "react-icons/fi";
import { FaPhotoVideo, FaRegCircle } from "react-icons/fa";
import { GiBookCover } from "react-icons/gi";
import { FaAward } from "react-icons/fa";
import { BiBook } from "react-icons/bi";

export const adminListSidebar = [
    {
        name: "Dashboard",
        link: "/dashboard",
        icon: MdSpaceDashboard
    },
    {
        name: 'PSB',
        icon: BiBook, // Replace with your icon component
        subItems: [
          { name: 'Pendaftaran', link: '/dashboard/pendaftaran', icon: FaRegCircle },
          { name: 'Siswa', link: '/dashboard/students', icon: FaRegCircle },
        ],
      },
    {
        name: 'Sekolah',
        icon: LiaSchoolSolid, // Replace with your icon component
        subItems: [
          { name: 'Data Sekolah', link: '/dashboard/profile-school', icon: FaRegCircle },
          { name: 'Tentang Sekolah', link: '/dashboard/tentang/1', icon: FaRegCircle },
        ],
      },
    {
        name: "User",
        link: "/dashboard/user",
        icon: MdPerson
    },
    
    {
        name: "Article",
        link: "/dashboard/articles",
        icon: IoNewspaperSharp
    },
    {
        name: "Agenda",
        link: "/dashboard/agenda",
        icon: RiCalendarEventFill
    },
    {
        name: "Pengumuman",
        link: "/dashboard/announcment",
        icon: MdAnnouncement
    },
    {
        name: "Prestasi",
        link: "/dashboard/prestasi",
        icon:  FaAward
    },
    {
        name: "Fasilitas",
        link: "/dashboard/facilities",
        icon:  MdRoomService
    },
    {
        name: "Extrakurikuler",
        link: "/dashboard/extrakurikuler",
        icon:  MdOutlineSportsKabaddi
    },
    {
        name: "Program Studi",
        link: "/dashboard/jurusan",
        icon:  GiBookCover
    },
    {
        name: "Galery",
        link: "/dashboard/galery",
        icon:  FaPhotoVideo
    },
    {
        name: "Video",
        link: "/dashboard/video",
        icon:  FaPhotoVideo
    },
    {
        name: "Alumni",
        link: "/dashboard/alumni",
        icon:  FaPeopleRoof
    },
    {
        name: "Setting",
        link: "/dashboard/setting",
        icon:  IoSettingsSharp
    },
    {
        name: "Profile",
        link: "/dashboard/profile",
        icon:  IoPersonSharp
    },
]

export const userListSidebar = [
        {
            name: "Dashboard",
            link: "/dashboard",
            icon: MdSpaceDashboard
        },
        {
            name: "Pendaftaran",
            link: "/dashboard/pendaftaran",
            icon:  BiBook
        },
        {
            name: "Profile",
            link: "/dashboard/profile",
            icon:  IoPersonSharp
        },
]