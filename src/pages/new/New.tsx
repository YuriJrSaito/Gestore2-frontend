import Navbar from '@/components/navbar/Navbar'
import Sidebar from '@/components/sidebar/Sidebar'
import styles from '@/styles/new.module.css'
import { useState } from "react";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { InputType } from '@/types/inputsType'

export default function New({inputs, title}: { inputs: InputType[], title: string}) {
    const [file, setFile] = useState<File | null>(null);

    return (
        <div className={styles.new}>
            <Sidebar />
            <div className={styles.newContainer}>
                <Navbar />
                <div className={styles.top}>
                    <h1>{title}</h1>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.left}>
                        <img
                            src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                            alt=""
                        />
                    </div>
                    <div className={styles.right}>
                        <form>
                            <div className={styles.formWrapper}>
                                <div className={styles.formInput}>
                                    <label htmlFor="file">
                                        Image: <DriveFolderUploadOutlinedIcon className={styles.icon} />
                                    </label>
                                    <input
                                        type="file"
                                        id="file"
                                        onChange={(e) => setFile(e.target.files![0])}
                                        style={{ display: "none" }}
                                    />
                                </div>

                                {inputs.map((input)=>(
                                    <div className={styles.formInput}>
                                        <label>{input.label}</label>
                                        <input type={input.type} placeholder={input.placeholder} />
                                    </div>
                                ))}
                            </div>
                            <button>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
