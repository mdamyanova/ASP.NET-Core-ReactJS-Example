import 'isomorphic-fetch';
import { removeAccessToken } from '../../utils/helpers';

export function logout() {
    fetch('/api/users/logout')
        .then(res => {
            if (res.status >= 200 && res.status < 300) {
                // Remove token of logged in user from local storage
                removeAccessToken();
                window.location.hash = '/';
            } else {
                window.location.hash = '/error';
            }
        });
}