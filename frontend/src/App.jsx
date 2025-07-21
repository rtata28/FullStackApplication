// App.jsx
import { useState, useEffect } from 'react';
import CustomerForm from './components/CustomerForm';
import CustomerTable from './components/CustomerTable';
import CustomerSearch from './components/CustomerSearch';
import { getCustomer, createCustomer, updateCustomer, deleteCustomer } from './services/customerApi';

function App() {
    const [customers, setCustomers] = useState([]);
    const [editingCustomer, setEditingCustomer] = useState(null);

    const loadCustomers = async () => {
        const res = await getCustomer({});
        if (res.data) setCustomers([res.data]);
    };

    useEffect(() => {
        loadCustomers();
    }, []);

    const handleSave = async (customer) => {
        if (editingCustomer) {
            await updateCustomer(editingCustomer.id, customer);
        } else {
            await createCustomer(customer);
        }
        setEditingCustomer(null);
        loadCustomers();
    };

    const handleEdit = (customer) => {
        setEditingCustomer(customer);
    };

    const handleDelete = async (id) => {
        await deleteCustomer(id);
        loadCustomers();
    };

    const handleSearch = async (name, email) => {
        const res = await getCustomer({ name, email });
        if (res.data) setCustomers([res.data]);
    };

    return (
        <div className="p-4 max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Customer Management</h1>
            <CustomerSearch onSearch={handleSearch} />
            <CustomerForm onSubmit={handleSave} initialData={editingCustomer} />
            <CustomerTable customers={customers} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
    );
}

export default App;