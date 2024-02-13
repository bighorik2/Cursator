import { Navigate, Route, Routes } from "react-router-dom";

import { General } from "./general";
import { ROUTE_CONSTANTS } from "shared/config";
import { SchoolListReviews } from "./schoolListReview";
import { SchoolReview } from "./schoolReview";

export const Routing = () => {
    return (
        <Routes>
            <Route path={ROUTE_CONSTANTS.HOME} element={<General />} />
            <Route path={ROUTE_CONSTANTS.REVIEWS} element={<SchoolListReviews />} />
            <Route path={ROUTE_CONSTANTS.REVIEWS + "/:id"} element={<SchoolReview />} />
            {/*<Route path={ROUTE_CONSTANTS.REVIEWS + "/:id/:test"} element={<SchoolReview />} />*/}
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};


