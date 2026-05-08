import React, {
    useEffect,
    useState,
} from "react";

import api from "../api/axios";

import {
    useNavigate,
} from "react-router-dom";

import "../styles/Stores.css";

export default function Stores() {
    const [stores, setStores] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        fetchStores();
    }, []);

    const fetchStores = async () => {
        const res = await api.get(
            "/user/stores"
        );

        setStores(res.data);
    };

    const submitRating = async (
        storeId,
        rating
    ) => {
        await api.post("/user/rating", {
            storeId,
            rating,
        });

        alert("Rating submitted");
    };

    const logout = () => {
        localStorage.removeItem("token");

        navigate("/login");
    };

    return (
        <>
            {/* HEADER */}

            <div className="stores-header">
                <h1 className="heading">
                    Stores
                </h1>

                <button
                    className="logout-btn"
                    onClick={logout}
                >
                    Logout
                </button>
            </div>

            {/* STORE GRID */}

            <div className="stores-grid">
                {stores.map((store) => (
                    <div
                        className="store-card"
                        key={store.id}
                    >
                        <div className="store-card-content">
                            <div>
                                <h2>{store.name}</h2>

                                <p>{store.address}</p>
                            </div>

                            <div className="store-footer">
                                <select
                                    onChange={(e) =>
                                        submitRating(
                                            store.id,
                                            e.target.value
                                        )
                                    }
                                >
                                    <option>
                                        Select Rating
                                    </option>

                                    <option value="1">
                                        ⭐ 1
                                    </option>

                                    <option value="2">
                                        ⭐⭐ 2
                                    </option>

                                    <option value="3">
                                        ⭐⭐⭐ 3
                                    </option>

                                    <option value="4">
                                        ⭐⭐⭐⭐ 4
                                    </option>

                                    <option value="5">
                                        ⭐⭐⭐⭐⭐ 5
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}