// routes/root/auth-callback.tsx
import { useEffect } from "react";
import {useNavigate} from 'react-router';
import {storeUserData} from '~/appwrite/auth';

export default function AuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogin = async () => {
      await storeUserData();
      navigate("/"); // or wherever you want
    };
    handleLogin();
  }, []);

  return <p>Logging you in...</p>;
}
