import { Header } from "./components/header"

export default function dashboardLayout({ children }:

    { children: React.ReactNode }
) {
    return (
        <>
           <Header></Header>
            {children}
        </>
    )
}