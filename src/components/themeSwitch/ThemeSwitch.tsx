import styles from '@/styles/sidebar.module.css'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'


const ThemeSwitch = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <div className={styles.bottom}>
            <div className={styles.colorOption} onClick={() => {location.reload();setTheme('light')}}></div>
            <div className={styles.colorOption} onClick={() => {location.reload();setTheme('dark')}}></div>
        </div>
    )
}

export default ThemeSwitch