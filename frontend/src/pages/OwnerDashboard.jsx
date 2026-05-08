import { useEffect, useState } from "react";
import api from "../api/axios";

export default function OwnerDashboard() {
    const [data, setData] = useState({});

    useEffect(() => {
        fetchDashboard();
    }, []);

    const fetchDashboard = async () => {
        const res = await api.get("/owner/dashboard");
        setData(res.data);
    };

    return (
        <div>
            <h1>Store Owner Dashboard</h1>

            <h2>Average Rating: {data.avg?.dataValues?.avgRating}</h2>
        </div>
    );
}