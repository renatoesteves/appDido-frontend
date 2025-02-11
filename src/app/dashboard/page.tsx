import Image from "next/image"
import Link from "next/link";
import styles from '../page.module.scss';
import logoImg from '../../../public/img.svg'
import { Orders } from "./components/orders";

export default function Dashboard() {
    return (
        <>
            <Orders></Orders>
        </>
    )
}