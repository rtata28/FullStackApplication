// components/CustomerForm.jsx
import { useState, useEffect } from 'react';

export default function CustomerForm({ onSubmit, initialData }) {
    const [form, setForm] = useState({
        name: '',
        email: '',
        annualSpend: '',
        lastPurchaseDate: ''
    });

    useEffect(() => {
        if (initialData) {
            setForm({ ...initialData });
        }
    }, [initialData]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({
            name: form.name,
            email: form.email,
            annualSpend: parseFloat(form.annualSpend),
            lastPurchaseDate: form.lastPurchaseDate
        });
        setForm({ name: '', email: '', annualSpend: '', lastPurchaseDate: '' });
    };

    return (
        <form onSubmit={handleSubmit} className="mb-6">
            <div className="grid grid-cols-2 gap-4">
                <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Name" className="border p-2 rounded" required />
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" className="border p-2 rounded" required />
                <input type="number" name="annualSpend" value={form.annualSpend} onChange={handleChange} placeholder="Annual Spend" className="border p-2 rounded" required />
                <input type="date" name="lastPurchaseDate" value={form.lastPurchaseDate} onChange={handleChange} className="border p-2 rounded" required />
            </div>
            <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">{initialData ? 'Update' : 'Create'}</button>
        </form>
    );
}