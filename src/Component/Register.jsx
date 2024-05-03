import { useForm } from "react-hook-form";

function Register() {
    const { register, handleSubmit, formState: { error }, } = useForm();

    const valSubmit = (data) => console.log(data)



    return (
        <>
            <form onSubmit={handleSubmit(valSubmit)}>
                <label htmlFor="name">Nombre</label>
                <input {...register('name')} />

                <label htmlFor="email">Correo</label>
                <input type="email" {...register('email')} />

                <label htmlFor="password">Contraseña</label>
                <input type="password" {...register('password')} />

                <label htmlFor="confirmPassword"> Confirmar Contraseña</label>
                <input type="password"{...register('confirmPassword')} />

                <label htmlFor="birthday"> Fecha de Nacimiento</label>
                <input type="date"{...register('date')} />

                <button className="btn btn-primary" type="submit" >
                    Registrarse
                </button>
            </form>

        </>
    )
}

export default Register; 