import styles from './styles.module.scss'
import { X } from 'lucide-react'

export function ModalOrder() {
    return (
        <dialog className={styles.dialogContainer}>
            <section className={styles.dialogContent}>
                <button className={styles.dialogBack}>
                    <X size={40} color="#FF3f4b"> </X>
                </button>
                <article className={styles.container}>
                    <h2>Detalhes do Pedido</h2>
                    <span className={styles.table}>
                        Mesa <b></b>
                    </span>

                    <section className={styles.containerItem}>
                        <span>1-  <b>Pizza de Catu</b></span>
                        <span>Pizza de Catu com aba,catuaba</span>
                    </section>

                    <button className={styles.buttonOrder}></button>
                </article>
            </section>
        </dialog>
    )
}