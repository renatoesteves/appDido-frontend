import styles from './styles.module.scss'
import { Button } from '@/app/dashboard/components/button'
import { api } from '@/services/api'
import { getCookieServer } from '@/lib/cookieServer'
import { redirect } from 'next/navigation';
export default function Category() {

    async function handleRegisterCategory(formData: FormData) {
        "use server"

        const name = formData.get("name")

        if (name === "") return;

        const data = {
            name: name,
        }
        const token = await getCookieServer();
        const response = await api.post("/category", data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .catch((err) => {
                console.log(err);
                return;
            })
        redirect("/dashboard");
        // console.log(response);
    }



    return (
        <main className={styles.container}>
            <h1>Nova Categoria</h1>
            <form className={styles.form}
                action={handleRegisterCategory}>
                <input type="text"
                    name="name"
                    placeholder='Nome da categoria, ex: Pizza'
                    required
                    className={styles.input} />
                <Button name="Cadastrar"></Button>
            </form>
        </main>
    )
}