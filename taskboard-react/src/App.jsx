import { useState } from 'react';
import LoginForm from './LoginForm';
import ProjectList from './ProjectList';
import AddProjectForm from './AddProjectForm';
import LogoutButton from './LogoutButton';

function App() {
    const [token, setToken] = useState(
        localStorage.getItem('token')
    );

    const [refresh, setRefresh] = useState(0);

    function handleLogin() {
        setToken(localStorage.getItem('token'));
    }

    function handleLogout() {
        setToken(null);
    }

    function handleProjectAdded() {
        setRefresh(refresh + 1);
    }

    if (!token) {
        return (
            <div>
                <h1>TaskBoard</h1>

                <LoginForm onLogin={handleLogin} />
            </div>
        );
    }

    return (
        <div>
            <h1>TaskBoard</h1>

            <LogoutButton
                onLogout={handleLogout}
            />

            <AddProjectForm
                onAdded={handleProjectAdded}
            />

            <ProjectList
                refresh={refresh}
            />
        </div>
    );
}

export default App;