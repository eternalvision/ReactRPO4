import React from "react";
import { Link } from "react-router-dom";
import City from "./data.json";

export const News = () => {
    return (
        <section className="News">
            <h1>News</h1>
            {City.map(({ id, cityName }) => {
                return (
                    <Link key={`${id}${cityName}`} to={`/news/usa/${cityName}`}>
                        {cityName}
                    </Link>
                );
            })}
            <Link to="/news/berlin">Berlin</Link>
            <Link to="/news/paris">Paris</Link>
        </section>
    );
};
