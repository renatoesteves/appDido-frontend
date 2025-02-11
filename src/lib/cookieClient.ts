import { getCookie } from "cookies-next";

export function getCookieClient() {
    // const cookieStore = await cookies();
    const token = getCookie("session")
    return token
}