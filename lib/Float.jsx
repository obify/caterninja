import styles from '$styles/Float.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp,faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Float()
{
    return (
        <div className={styles.container}>
            <div className={styles.item}>
            <button className={styles.floatBtn}>
                

                    <span>Call a Ninja</span>
                    <br />Instant Order</button>
                    {/* <img src='messaging.svg' color="white" alt=''/> */}
                    {/* <FontAwesomeIcon icon={faInstagram} className={styles.icon} /> */}
                    {/* <FontAwesomeIcon icon="fa-solid fa-message" /> */}
            </div>
            <div className={styles.item}>
            
            <img src='floatLogo.png' color="white" alt=''/>
                {/* <FontAwesomeIcon icon={faWhatsapp} className={styles.icon} /> */}
            </div>
            <div className={styles.item}>
               
                    <button className={styles.floatBtn}>
                <span>Custom Menu</span>
                <br />Instant Price
                
                </button>
            </div>
            {/* <div className={styles.item}>

            </div> */}
        </div>
//         <div className='sticky-section'>
// <div className='sticky-cta'>
// <a className='sticky-cta--col'>
//     <span>Refer a frend</span>
//     <span>Refer a frend</span>
// </a>
// <a className='sticky-cta--col'></a>
// <a className='sticky-cta--col'></a>
// </div>
//         </div>
    )
}