import { Routes, Route, Navigate } from "react-router-dom";
import AddEmployee from "./AddEmployee";

export default function EmployeeDetails() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Navigate replace to="add" />} />
                <Route path="add" element={<AddEmployee />} />
            </Routes>
        </>
    )
}