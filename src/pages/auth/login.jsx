import React, { useEffect } from 'react';
import Input from 'components/Input';
import ButtonLoading from 'components/ButtonLoading';
import { Link } from 'react-router-dom';
import useFormData from 'hooks/useFormData';
import { useMutation } from '@apollo/client';
import { LOGIN } from 'graphql/auth/mutations';
import { useAuth } from 'context/authContext';
import { useNavigate } from 'react-router-dom';
import logo from "media/logo_black.png";


const Login = () => {
    const navigate = useNavigate();
    const { setToken } = useAuth();
    const { form, formData, updateFormData } = useFormData();

    const [login, { data: dataMutation, loading: mutationLoading, error: mutationError }] =
        useMutation(LOGIN);

    const submitForm = (e) => {
        e.preventDefault();
        login({
            variables: formData,
        });
    };
    useEffect(() => {
        if (dataMutation) {
            if (dataMutation.login.token) {
                setToken(dataMutation.login.token);
                navigate('/main');
            }
        }
    }, [dataMutation, setToken, navigate]);

    return (
        <div className='flex flex-col items-center justify-center w-full h-full p-10'>
            <img src={logo} alt="Logo" className="w-12 " />
            <h1 className='text-xl font-bold text-gray-900'>Iniciar sesión</h1>
            <form className='flex flex-col' onSubmit={submitForm} onChange={updateFormData} ref={form}>
                <Input name='correo' type='email' label='Correo' required={true} />
                <Input name='password' type='password' label='Contraseña' required={true} />
                <ButtonLoading
                    disabled={Object.keys(formData).length === 0}
                    loading={mutationLoading}
                    text='Iniciar Sesión'
                />
            </form>
            <span>¿No tienes una cuenta?</span>
            <Link to='/auth/register'>
                <span className='text-blue-700'>Crear cuenta</span>
            </Link>
        </div>
    );
};

export default Login;