import Styles from '@/styles/login.module.css'
import Link from 'next/link';
import { useState } from 'react';

export default function Signin() {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    return (
        <div className={Styles.container}>
            <div className={Styles.containerLogin}>
                <div className={Styles.wrapLogin}>
                   
                    <span className={Styles.loginFormTitle}>Gestore Admin</span>
                    <span className={Styles.loginFormTitle}>Signin!</span>
                    <span className={Styles.loginFormTitle}><img src={""} alt=""/></span>

                    <div className={Styles.inputContainer}>
                        <div className={Styles.inputGroup}>
                            <input type="text" id='email' value={email} onChange={e => setEmail(e.target.value)} required/>
                            <label htmlFor="email" className={Styles.inputGroupLabel}>Email address</label>
                        </div>

                        <div className={Styles.inputGroup}>
                            <input type="password" id='password' value={password} onChange={e => setPassword(e.target.value)} required/>
                            <label htmlFor="password" className={Styles.inputGroupLabel}>Password</label>
                        </div>
                    </div>

                    <div className={Styles.inputContainer}>
                        <input type="button" className={Styles.loginFormBtn} value="Login" />
                    </div>

                    <div className={Styles.textCenter}>
                        <span className={Styles.txt1}>Don't have an account?</span>
                        <Link href="/authentication/signup" as="/Register" className={Styles.txt2}>Create account</Link>
                    </div>

                </div>
            </div>
        </div>
    )
}
