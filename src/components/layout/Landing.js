import { useEffect } from 'react';
import { useNavigate } from 'react-router';
function Landing() {
    const navigate = useNavigate();
    useEffect(() => navigate(`/login`));
}

export default Landing;
