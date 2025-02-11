import { Orders } from "./components/orders";
import { api } from "@/services/api";
import { getCookieServer } from "@/lib/cookieServer";
import { OrderProps } from "@/lib/order.type";

async function getOrders(): Promise<OrderProps[] | []> {
    try {
        const token = await getCookieServer();
        const response = await api.get("/orders", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response.data || []
    } catch (error) {
        console.log(error)
        return [];
    }
}
export default async function Dashboard() {
    const orders = await getOrders();

    return (
        <>
            <Orders orders={orders}></Orders>
        </>
    )
}