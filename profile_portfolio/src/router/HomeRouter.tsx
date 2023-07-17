import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from "../features/Landing_page"

function HomeRouter() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage />}></Route>
                </Routes>
            </BrowserRouter>

        </>
    )
}

export default HomeRouter;
