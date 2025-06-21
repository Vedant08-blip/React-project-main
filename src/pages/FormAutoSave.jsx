import React, { useEffect, useState } from 'react';

const FormAutoSave = () => {
    const [form, setForm] = useState({ name: '', email: '' });

    useEffect(() => {
        const saved = localStorage.getItem("fromdata");
        if (saved) {
            setForm(JSON.parse(saved));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("fromdata", JSON.stringify(form));
    }, [form]);

    return (
        <div>
            <input
                type='text'
                placeholder='Enter Your Name'
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
                type='text'
                placeholder='Enter Your Email'
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
        </div>
    );
};

export default FormAutoSave;