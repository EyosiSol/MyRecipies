import styles from '../Styles/rightDiv.module.css'

export default function rightContainer({children}){
    return (<div className={styles.rightDiv}>{children}</div>)
}