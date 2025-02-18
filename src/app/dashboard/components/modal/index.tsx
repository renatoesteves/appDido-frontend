"use client"
import { OrderContext } from '@/providers/order'
import styles from './styles.module.scss'
import { X } from 'lucide-react'
import { use } from 'react'
import { calculateTotalOrder } from '@/lib/helper'


export function ModalOrder() {

    async function handleFinishOrder() {
        await finishOrder(order[0].order.id);
    }


    const { onRequestClose, order, finishOrder } = use(OrderContext)
    return (
        <dialog className={styles.dialogContainer}>
            <section className={styles.dialogContent}>
                <button className={styles.dialogBack}
                    onClick={onRequestClose}>
                    <X size={40} color="#FF3f4b"> </X>
                </button>
                <article className={styles.container}>
                    <h2>Detalhes do Pedido</h2>
                        <span className={styles.table}>
                            Mesa <b>{order[0].order.table}</b>
                        </span>
                    {order[0].order?.name && (
                        <span className={styles.name}>
                            <b>{order[0].order.name}</b>
                        </span>
                    )}

                    {order.map(item => (
                        <section className={styles.item} key={item.id}>
                            {/* <img src={item.product.banner} width={120} height={120}/> */}
                            <span>Qtd: {item.amount} - <b>{item.product.name}</b> - R${parseFloat(item.product.price) * item.amount} </span>
                            <span className={styles.description}>
                                {item.product.description}
                            </span>
                        </section>
                    ))}


                    <h3 className={styles.total}>R$ {calculateTotalOrder(order)} </h3>

                    <button className={styles.buttonOrder} onClick={handleFinishOrder}>Concluir Pedido</button>
                </article>
            </section>
        </dialog>
    )
}