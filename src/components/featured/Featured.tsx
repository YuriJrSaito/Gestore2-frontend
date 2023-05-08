import styles from '@/styles/featured.module.css'
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";

export default function Featured() {
    return (
        <div className={styles.featured}>
            <div className={styles.top}>
                <h1 className={styles.title}>Total Revenue</h1>
                <MoreVertIcon fontSize='small'/>
            </div>
            <div className={styles.bottom}>
                <div className={styles.featuredChart}>
                    <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
                </div>
                <p className={styles.title}>Total sales made today</p>
                <p className={styles.amount}>$420</p>
                <p className={styles.desc}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Aliquam, omnis unde aut pariatur voluptates labore 
                    alias eveniet harum iure tenetur nam a cumque voluptatum reiciendis 
                    magni. Non veritatis sed optio!
                </p>
                <div className={styles.summary}>
                    <div className={styles.item}>
                        <div className={styles.itemTitle}>Target</div>
                        <div className={`${styles.itemResult} ${styles.negative}`}>
                            <KeyboardArrowDownIcon fontSize='small'/>
                            <div className={styles.resultAmount}>$12.4k</div>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.itemTitle}>Last Week</div>
                        <div className={`${styles.itemResult} ${styles.positive}`}>
                            <KeyboardArrowUpOutlinedIcon fontSize='small'/>
                            <div className={styles.resultAmount}>$12.4k</div>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.itemTitle}>Last Month</div>
                        <div className={`${styles.itemResult} ${styles.positive}`}>
                            <KeyboardArrowUpOutlinedIcon fontSize='small'/>
                            <div className={styles.resultAmount}>$12.4k</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
