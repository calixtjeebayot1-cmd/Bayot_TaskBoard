import { useEffect, useState } from 'react';
import { api } from './api';

function ProjectList({ refresh }) {
    const [projects, setProjects] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        async function getProjects() {
            try {
                const result = await api('/projects');

                setProjects(result.data);
            } catch  {
                setError('Failed to load projects');
            }
        }

        getProjects();
    }, [refresh]);

    return (
        <div>
            <h2>Projects</h2>

            {error && <p>{error}</p>}

            {projects.length === 0 ? (
                <p>No projects yet.</p>
            ) : (
                <ul>
                    {projects.map((project) => (
                        <li key={project.id}>
                            {project.name}
                            {' - '}
                            Tasks: {project.tasks_count}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ProjectList;