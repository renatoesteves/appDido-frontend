import { OrderItemProps } from "@/providers/order";

export function calculateTotalOrder(orders: OrderItemProps[]) {
    return orders.reduce((total, item) => {
        // Verifique se item.product.price é uma string que pode ser convertida para número
        const itemPrice = parseFloat(item.product.price);

        // Verifique se item.amount é um número
        const itemAmount = typeof item.amount === 'number' ? item.amount : 0;

        // Calcule o total do item
        const itemTotal = itemPrice * itemAmount;

        // Retorne o total acumulado
        return total + itemTotal;
    }, 0);
}
