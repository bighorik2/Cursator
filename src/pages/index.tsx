import { Navigate, Route, Routes } from "react-router-dom";

export const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<></>} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};


