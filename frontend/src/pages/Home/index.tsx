import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios, { AxiosResponse } from 'axios';

import Loading from './Loading';
import UploadCV from './UploadCV';

function Home() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(false);

    const cvUploaded = (e: any) => {
        setLoading(true);

        if (e.target.files.length === 0) return;

        const data = new FormData();
        data.append('file', e.target.files[0], e.target.files[0].name);
        axios.put('http://localhost:5000/', data).then((resp: AxiosResponse) => {
            navigate('/profile');
        });

    }

	return (
        <div id="Home" style={{
            backgroundColor: loading?'white': '#15083E',
            height:'100%',
        }}>
            {
                loading
                ? <Loading />
                : <UploadCV cvUploaded={cvUploaded} />
            }
        </div>
	);
}

export default Home;
