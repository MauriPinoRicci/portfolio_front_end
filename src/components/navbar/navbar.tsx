import React from "react";
import styles from './navbar.module.css'
import {
	AiOutlineInstagram,
	AiOutlineFacebook,
	AiOutlineTwitter,
	AiFillCode,
} from 'react-icons/ai'

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
				<div className={styles.navbar_logo}>
					<AiFillCode size="60px" />
				</div>
				<div className={styles.navbar_right}>
					<a className={styles.icons} href="https://www.instagram.com/mauripinoricci/" target="_blank">
						<AiOutlineInstagram size="36px" />
					</a>
					<a className={styles.icons} href="https://www.facebook.com/mauri.pino.1" target="_blank">
						<AiOutlineFacebook size="36px" />
					</a>
					<a className={styles.icons} href="https://twitter.com/mauripinoricci" target="_blank">
						< AiOutlineTwitter size="36px" />
					</a>
					<button className={styles.button}>
						Login
					</button>
				</div>
			</nav>
    )
}

export {Navbar}