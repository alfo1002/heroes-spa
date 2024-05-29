import { Navigate, Route, Routes } from "react-router-dom"
import { MarvelPage } from "../../heroes/pages/MarvelPage"
import { DcPage } from "../../heroes/pages/DcPage"
import { LoginPage } from "../../auth/pages/LoginPage"
import { Navbar } from "../../ui/components/Navbar"
import { HeroPage } from "../../heroes/pages/HeroPage"
import { SearchPage } from "../../heroes/pages/SearchPage"
import { PrivateRoute } from "./PrivateRoute"

export const AppRouter = () => {
    return (
        <>
            <Navbar />
            <Routes>

                <Route path="/login" element={<LoginPage />} />

                <Route path="/*" element={
                    <PrivateRoute>
                        <Routes>
                            <Route path="marvel" element={<MarvelPage />} />
                            <Route path="dc" element={<DcPage />} />
                            <Route path="hero/:id" element={<HeroPage />} />
                            <Route path="search" element={<SearchPage />} />
                            <Route path="*" element={<Navigate to="/marvel" />} />
                        </Routes>
                    </PrivateRoute>
                } />

                {/* <Route path="/" element={<Navigate to="/marvel" />} /> */}
            </Routes>
        </>
    )
}
