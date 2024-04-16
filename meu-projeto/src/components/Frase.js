import styles from './Frase.module.css'

function Frase(){
    return(
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}>Este é um componente com uma frase !</p>
            <h3>Olá</h3>
        </div>
    )
}

export default Frase