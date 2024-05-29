import { AppRouter } from "./assets/router/AppRouter"
import { AuthProvider } from "./auth/context/AuthProvider"

export const HeroesApp = () => {
    return (
        <>
            <AuthProvider>
                <AppRouter />
            </AuthProvider>

        </>

    )
}
