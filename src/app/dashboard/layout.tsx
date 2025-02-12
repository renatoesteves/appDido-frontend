import { Header } from "./components/header"
import { OrderProvider } from "@/providers/order"

export default function dashboardLayout({ children }:

    { children: React.ReactNode }
) {
    return (
        <>
            <Header />
            <OrderProvider>
                {children}
            </OrderProvider>


        </>
    )
}