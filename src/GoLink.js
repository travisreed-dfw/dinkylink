import { React, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import db from './firebase.js';
import { getDocs, collection, query, where } from 'firebase/firestore';

function GoLink() {
    const { code } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        const urlRef = collection(db, 'urls');
        const q = query(urlRef, where('code', '==', code));
        getDocs(q).then((querySnapshot) => {
            if (querySnapshot.empty) {
                navigate('/');
            }
            querySnapshot.forEach((doc) => {
                window.location.replace(doc.data().url);
                // console.log(doc.id, ' => ', doc.data().url);
            });
        });
    }, []);
}

export default GoLink;
