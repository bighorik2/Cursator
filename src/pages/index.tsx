import { Navigate, Route, Routes } from "react-router-dom";

import { General } from "./general";

export const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<General />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};


