import { Navigate, Route, Routes } from "react-router-dom";
import NotFound from "./pages/notFound";
import Todos from "./pages/todo";

export default function AppRoute() {
    return (
        <Routes>
            <Route path="/" element={<Todos />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="/*" element={<Navigate to="/404" />} />
        </Routes>
    )
}

