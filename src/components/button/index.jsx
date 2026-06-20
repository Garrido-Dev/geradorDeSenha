import styles from "./styles.module.css"

export default function Button(props){
    return(
        <div className={styles.boxBtn}>{props.children}</div>
    )
}