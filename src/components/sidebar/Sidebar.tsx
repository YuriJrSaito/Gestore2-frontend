import styles from '@/styles/sidebar.module.css'
import Link from 'next/link'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useContext } from 'react';

export default function Sidebar() {

    return (
        <div className={styles.sidebar}>
            <div className={styles.top}>
                <Link as='/Home' href='/home/Home'>
                    <span className={styles.logo}>Gestore-admin</span>
                </Link>
            </div>
            <hr />
            <div className={styles.center}>
                <ul>
                    <p className={styles.title}>MAIN</p>
                    <Link as='/Home' href='/home/Home'>
                        <li>
                            <DashboardIcon className={styles.icon}/>
                            <span>Dashboard</span>
                        </li>
                    </Link>
                    <p className={styles.title}>LISTS</p>
                    <Link as='/Users' href='/list/List'>
                        <li>
                            <PersonOutlineIcon className={styles.icon}/>
                            <span>Users</span>
                        </li>
                    </Link>
                    <Link as='/Products' href='/list/List'>
                        <li>
                            <StoreIcon className={styles.icon}/>
                            <span>Products</span>
                        </li>
                    </Link>
                    <Link as='/Ordes' href='/list/List'>
                        <li>
                            <CreditCardIcon className={styles.icon}/>
                            <span>Orders</span>
                        </li>
                    </Link>
                    <Link as='/Delivery' href='/list/List'>
                        <li>
                            <LocalShippingIcon className={styles.icon}/>
                            <span>Delivery</span>
                        </li>
                    </Link>
                    <p className={styles.title}>USEFUL</p>
                    <Link as='/Stats' href='/list/List'>
                        <li>
                            <InsertChartIcon className={styles.icon}/>
                            <span>Stats</span>
                        </li>
                    </Link>
                    <Link as='/Notifications' href='/list/List'>
                        <li>
                            <NotificationsNoneIcon className={styles.icon}/>
                            <span>Notifications</span>
                        </li>
                    </Link>
                    <p className={styles.title}>SERVICE</p>
                    <Link as='/System-health' href='/list/List'>
                        <li>
                            <SettingsSystemDaydreamOutlinedIcon className={styles.icon}/>
                            <span>System Health</span>
                        </li>
                    </Link>
                    <Link as='/Logs' href='/list/List'>
                        <li>
                            <PsychologyOutlinedIcon className={styles.icon}/>
                            <span>Logs</span>
                        </li>
                    </Link>
                    <Link as='/Settings' href='/list/List'>
                        <li>
                            <SettingsApplicationsIcon className={styles.icon}/>
                            <span>Settings</span>
                        </li>
                    </Link>
                    <p className={styles.title}>USER</p>
                    <Link as='/Profile' href='/list/List'>
                        <li>
                            <AccountCircleOutlinedIcon className={styles.icon}/>
                            <span>Profile</span>
                        </li>
                    </Link>
                    <li>
                        <ExitToAppIcon className={styles.icon}/>
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className={styles.bottom}>
                <div className={styles.colorOption}></div>
                <div className={styles.colorOption}></div>
            </div>
        </div>
    )    
}
