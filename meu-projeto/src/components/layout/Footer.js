import {FaFacebook, FaInstagram, FaLinkedin, FaYoutube} from 'react-icons/fa'

import styles from './Footer.module.css'

function Footer(){
    return(
        <p>
            <ul className={styles.social_list}>
                <li className={styles.social_list_li}><FaFacebook /></li>
                <li className={styles.social_list_li}><FaInstagram /></li>
                <li className={styles.social_list_li}><FaLinkedin /></li>
                <li className={styles.social_list_li}><FaYoutube /></li>
            </ul>
        </p>
        
    )

}

export default Footer