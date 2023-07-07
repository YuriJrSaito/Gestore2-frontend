import styles from '@/styles/list.module.css'
import Sidebar from '@/components/sidebar/Sidebar'
import Navbar from '@/components/navbar/Navbar'
import Datatable from '@/components/datatable/Datatable'

export default function List({title, origin}:{title: string, origin: string}) {
    return (
        <div className={styles.list}>
            <Sidebar />
            <div className={styles.listContainer}>
                <Navbar />
                <Datatable title={title} origin={origin} />
            </div>
        </div>
    )
}