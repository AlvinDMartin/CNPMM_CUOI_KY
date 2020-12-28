
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddIcon from '@material-ui/icons/Add';
import Person from "@material-ui/icons/Person";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";

// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import LoginPage from "views/Login/login.js";
import SignPage from "views/Signup/Signup.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import DatlichPage from "views/Datlichkham/Checkout.js";
import TableList from "views/TableList/TableList.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";
// core components/views for RTL layout

const dashboardRoutes = [

  {
    path: "/trangchu",
    name: "Trang chủ",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/dangnhap",
    name: "Đăng nhập",
    icon: AccountCircleIcon,
    component: LoginPage,
    layout: "/admin"
  },
  {
    path: "/dangky",
    name: "Đăng ký",
    icon: AddIcon,
    component: SignPage,
    layout: "/admin"
  },
  {
    path: "/nguoidung",
    name: "Thông tin người dùng",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/datlichkham",
    name: "Đặt lịch khám",
    icon: Person,
    component: DatlichPage,
    layout: "/admin"
  },
  {
    path: "/danhsach",
    name: "Bảng danh sách",
    icon: "content_paste",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Maps",
    icon: LocationOn,
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/thongbao",
    name: "Thông báo",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin"
  },
  {
    path: "/thongtinlienhe",
    name: "Thông tin liên hệ",
    icon: Unarchive,
    component: UpgradeToPro,
    layout: "/admin"
  }
];

export default dashboardRoutes;
