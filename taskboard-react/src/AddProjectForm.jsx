import { useState } from 'react';
import { api } from './api';

function AddProjectForm({ onAdded }) {
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        if (!name.trim()) {
            return;
        }

        try {
            setError('');

            await api('/projects', {
                method: 'POST',
                body: {
                    name: name
                }
            });

            setName('');

            onAdded();
        } catch {
            setError('Failed to add project');
        }
    }

    return (
        <div>
            <h2>Add Project</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Project name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <button type="submit">
                    Add Project
                </button>
            </form>

            {error && <p>{error}</p>}
        </div>
    );
}

export default AddProjectForm;