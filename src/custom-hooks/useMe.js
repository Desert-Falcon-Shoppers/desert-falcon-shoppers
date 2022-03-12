import { useState, useEffect } from 'react';
import { getUserById } from '../axios-services';

export function useMe(token) {
    const [me, setMe] = useState({});

    useEffect(() => {
        const fetchMe = async () => {
            try {
                const me = await getUserById(token);
                setMe(me);
            } catch (err) {
                console.error(err);
            }
        };

        // only fetch me if auth token
        // else set me to empty object to trigger cart, cart badge updates
        if (token) fetchMe();
        else setMe({});
    }, [token]);

    return { me };
}