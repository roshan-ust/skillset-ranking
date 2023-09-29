const API_URL = 'https://localhost:7218/skillsetrank/';

export async function addEmployee(employee) {
    return fetch(API_URL + 'employee/add', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...employee, id: 0 }),
    });
}