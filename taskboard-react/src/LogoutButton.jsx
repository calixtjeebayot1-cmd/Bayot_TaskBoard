import { api } from './api';

function LogoutButton({ onLogout }) {
    async function handleLogout() {
        try {
            await api('/logout');
        } catch (error) {
            console.log(error);
        }

        localStorage.removeItem('token');

        onLogout();
    }

    return (
        <button onClick={handleLogout}>
            Logout
        </button>
    );
}

export default LogoutButton;