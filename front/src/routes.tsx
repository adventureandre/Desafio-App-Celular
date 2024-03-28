import {Route, Routes} from "react-router-dom";
import { Dashboard } from "./pages/app/dashboard";
import { AuthLayout } from "./pages/_layouts/auth";
import { SignIn } from "./pages/auth/sign-in";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<AuthLayout/>}>
                <Route path="/" element={<SignIn />} />
            </Route>
        </Routes>
    )
}