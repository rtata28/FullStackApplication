// components/CustomerSearch.jsx
import { useState } from 'react';

export default function CustomerSearch({ onSearch }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(name, email);
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
            <input type="text" placeholder="Search by Name" value={name} onChange={(e) => setName(e.target.value)} className="border p-2 rounded" />
            <input type="email" placeholder="Search by Email" value={email} onChange={(e) => setEmail(e.target.value)} className="border p-2 rounded" />
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Search</button>
        </form>
    );
}