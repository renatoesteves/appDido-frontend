"use client"
import Link from 'next/link'
import styles from './styles.module.scss'
import logoImg from '../../../../../public/img.svg'
import Image from 'next/image'
import { LogOutIcon } from 'lucide-react'
import { deleteCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'

export function Header() {
    const router = useRouter();
    async function handleLogout() {
        deleteCookie("session", { path: "/" })
        router.replace("/");
    }
    return (
        <>
            <header className={styles.headerContainer}>
                <div className={styles.headerContent}>
                    <Link href="/dashboard">
                        <Image
                            alt="Logo appDido"
                            src={logoImg}
                            className="img-dashboard">

                        </Image>
                    </Link>
                    <nav>
                        <Link href="/dashboard/category">
                            Categoria
                        </Link>
                        <Link href="/dashboard/product">
                            Produto
                        </Link>
                        <form action={handleLogout}>
                            <button type="submit">
                                <LogOutIcon size={24} color="#FFF" />
                            </button>
                        </form>
                    </nav>
                </div>
            </header>
        </>
    )
}