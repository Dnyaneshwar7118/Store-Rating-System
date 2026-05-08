import { useEffect, useState } from "react";
import api from "../api/axios";

export default function AdminPanel() {
    const [data, setData] = useState({});

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const res = await api.get("/admin/dashboard");
        setData(res.data);
    };

    return (
        <div>
            <h1>Admin Dashboard</h1>

            <h2>Total Users: {data.users}</h2>
            <h2>Total Stores: {data.stores}</h2>
            <h2>Total Ratings: {data.ratings}</h2>
        </div>
    );
}