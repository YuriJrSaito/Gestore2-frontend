import styles from '@/styles/single.module.css'
import Chart from '@/components/chart/Chart'
import Navbar from '@/components/navbar/Navbar'
import Sidebar from '@/components/sidebar/Sidebar'
import Table from '@/components/table/Table'

export default function Single() {
    return (
        <div className={styles.single}>
            <Sidebar />
            <div className={styles.singleContainer}>
                <Navbar />
                <div className={styles.top}>
                    <div className={styles.left}>
                        <div className={styles.editButton}>Edit</div>
                        <h1 className={styles.title}>Information</h1>
                        <div className={styles.item}>
                            <img 
                                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                                alt="" 
                                className={styles.itemImg}
                            />
                            <div className={styles.details}>
                                <h1 className={styles.itemTitle}>Jane Doe</h1>
                                <div className={styles.detailItem}>
                                    <span className={styles.itemKey}>Email:</span>
                                    <span className={styles.itemValue}>janedoe@gmail.com</span>
                                </div>
                                <div className={styles.detailItem}>
                                    <span className={styles.itemKey}>Phone:</span>
                                    <span className={styles.itemValue}>+55 014 997229855</span>
                                </div>
                                <div className={styles.detailItem}>
                                    <span className={styles.itemKey}>Address:</span>
                                    <span className={styles.itemValue}>Rua pernambuco, iacri/SP</span>
                                </div>
                                <div className={styles.detailItem}>
                                    <span className={styles.itemKey}>Country:</span>
                                    <span className={styles.itemValue}>Brazil</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <Chart aspect={3 / 1} title="User Spending ( Last 6 Months )" />
                    </div>
                </div>
                <div className={styles.bottom}>
                    <h1 className={styles.title}>Last Transactions</h1>
                    <Table />
                </div>
            </div>
        </div>
    )
}
