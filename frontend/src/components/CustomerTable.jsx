// components/CustomerTable.jsx
export default function CustomerTable({ customers, onEdit, onDelete }) {
    return (
        <table className="w-full border">
            <thead>
            <tr className="bg-gray-100">
                <th className="border px-2 py-1">Name</th>
                <th className="border px-2 py-1">Email</th>
                <th className="border px-2 py-1">Annual Spend</th>
                <th className="border px-2 py-1">Last Purchase Date</th>
                <th className="border px-2 py-1">Tier</th>
                <th className="border px-2 py-1">Actions</th>
            </tr>
            </thead>
            <tbody>
            {customers.map((c) => (
                <tr key={c.id}>
                    <td className="border px-2 py-1">{c.name}</td>
                    <td className="border px-2 py-1">{c.email}</td>
                    <td className="border px-2 py-1">${c.annualSpend.toFixed(2)}</td>
                    <td className="border px-2 py-1">{c.lastPurchaseDate}</td>
                    <td className="border px-2 py-1">{c.tier}</td>
                    <td className="border px-2 py-1">
                        <button onClick={() => onEdit(c)} className="text-blue-500 mr-2">Edit</button>
                        <button onClick={() => onDelete(c.id)} className="text-red-500">Delete</button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}