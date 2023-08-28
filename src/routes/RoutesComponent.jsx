import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { RouteComponents } from "../routeComponents/RouteComponents";

const { Friends, News, Profile } = RouteComponents;

const ProfileContent = () => {
    return (
        <ul>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
        </ul>
    );
};

export const RouteComponent = () => {
    return (
        <Routes>
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/" element={<News />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/news" element={<News />} />
            <Route
                path="/profile"
                element={<Profile ProfileContent={ProfileContent} />}
            />
        </Routes>
    );
};
