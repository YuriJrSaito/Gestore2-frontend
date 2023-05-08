import styles from '@/styles/list.module.css'
import Sidebar from '@/components/sidebar/Sidebar'
import Navbar from '@/components/navbar/Navbar'
import Datatable from '@/components/datatable/Datatable'

export default function List() {
    return (
        <div className={styles.list}>
            <Sidebar />
            <div className={styles.listContainer}>
                <Navbar />
                <Datatable />
            </div>
        </div>
    )
}
