import { NextRequest, NextResponse } from "next/server";
import { getCookieServer } from "@/lib/cookieServer";
import { api } from "./services/api";

export async function middleware(req: NextRequest) {

    const { pathname } = req.nextUrl
    const token = await getCookieServer();

    if (pathname.startsWith("/_next") || pathname === "/") {
        return NextResponse.next();
    }

    if (pathname.startsWith("/dashboard")) {
        if (!token) {
            return NextResponse.redirect(new URL("/", req.url))
        }

        const isValid = await validateToken(token)
        console.log("Usuário validado e logado com sucesso! =>", isValid)
        if (!isValid) {
            return NextResponse.redirect(new URL("/", req.url))
        }
    }

    return NextResponse.next();

    async function validateToken(token: string) {
        if (!token) return false;

        try {
            await api.get("/me", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            return true;
        } catch (err) {
            console.log(err)
            return false;
        }
    }

}