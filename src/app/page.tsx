import styles from './page.module.scss'
import logoImg from '../../public/img.svg'
import Image from 'next/image'
import Link from 'next/link'
import { api } from '@/services/api'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

export default function Page() {

  async function handleLogin(formData: FormData) {
    "use server"

    const email = formData.get("email")
    const password = formData.get("password")

    if (email === "" || password === "") {
      return;
    }

    try {
      const response = await api.post("/session", {
        email,
        password
      })


      if (!response.data.token) {
        return;
      }

      console.log(response.data);


      const expressTime = 30 * 24 * 60 * 60 * 1000;
      const cookiesStore = await cookies();

      cookiesStore.set("session", response.data.token, {
        maxAge: expressTime,
        path: "/",
        httpOnly: false,
        secure: process.env.NODE_ENV === 'production'
      })

    } catch (err) {
      console.log(err);
      return;
    }

    redirect("/dashboard")
  }


  return (
    <>
      <div className={styles.containerCenter}>
        <Image
          src={logoImg}
          alt="Logo dp App"
          className="img-login"
        />

        <section className={styles.login}>
          <h1> Logue com sua conta</h1>
          <form action={handleLogin}>
            <input
              type="email"
              required
              name="email"
              placeholder="Digite seu email..."
              className={styles.input}
            />

            <input
              type="password"
              required
              name="password"
              placeholder="***********"
              className={styles.input}
            />

            <button type="submit" className={styles.button}>
              Acessar
            </button>
          </form>

          <Link href="/signup" className={styles.text}>
            Não possui uma conta? Cadastre-se
          </Link>

        </section>
      </div>
    </>
  )
}