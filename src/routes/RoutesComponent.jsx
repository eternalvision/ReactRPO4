import React from "react";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import City from "./data.json";
import { RouteComponents } from "../routeComponents/RouteComponents";

const { Friends, News, Profile } = RouteComponents;

const CityBlock = ({ data }) => {
    const { cityname } = useParams();
    const { cityName, peopleCount } = data;
    if (cityname === cityName) {
        return (
            <ul>
                <li>{cityName}</li>
                <li>{peopleCount}</li>
            </ul>
        );
    }
};

const Usa = () => {
    return (
        <div>
            {City.map((data) => {
                console.log(data);
                const { id, peopleCount } = data;
                return <CityBlock key={`${id}${peopleCount}`} data={data} />;
            })}
        </div>
    );
};

const Berlin = () => {
    return <h2>Berlin</h2>;
};

const Paris = () => {
    return <h2>Paris</h2>;
};

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
            <Route path="/news/usa/:cityname" element={<Usa />} />
            <Route path="/news/berlin" element={<Berlin />} />
            <Route path="/news/paris" element={<Paris />} />
            <Route path="/profile/:userName" element={<Profile />} />
        </Routes>
    );
};
