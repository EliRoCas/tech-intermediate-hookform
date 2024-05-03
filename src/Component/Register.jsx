import { useForm } from "react-hook-form";

function Register() {
    const { register, handleSubmit, formState: { errors }, } = useForm();

    const valSubmit = (data) => console.log(data)



    return (
        <>
            <form onSubmit={handleSubmit(valSubmit)}>
                <label htmlFor="name">Nombre</label>
                <input {...register('name', {
                    required: {
                        value: true,
                        message: "El nombre es requerido"
                    },
                })}
                />
                {errors.name && <p className="text-danger">{errors.name.message}</p>}

                <label htmlFor="email">Correo</label>
                <input type="email" {...register('email', {
                    required: {
                        value: true,
                        message: "El correo es requerido"
                    },
                    pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "El correo no tiene un formato válido"
                    }
                })} />
                {errors.email && <p className="text-danger">{errors.email.message}</p>}

                <label htmlFor="password">Contraseña</label>
                <input type="password" {...register('password', {
                    required: {
                        value: true,
                        message: "La contraseña es requerida"
                    },
                    pattern: {
                        value: /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+|~=`{}\[\]:";'<>?,.\/])(?=.*[a-z]).{8,}$/,
                        message: "La contraseña no tiene un formato válido"

                    }
                })} />
                {errors.password && <p className="text-danger">{errors.password.message}</p>}


                <label htmlFor="confirmPassword"> Confirmar Contraseña</label>
                <input type="password"{...register('confirmPassword', {
                    required:{
                        value: true,
                        message: "La confirmación de contraseña es requerida"
                    }, 
                    pattern: {
                        value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/,
                        message: "Las contraseñas no coinciden"
                    }
                })} />

                <label htmlFor="birthday"> Fecha de Nacimiento</label>
                <input type="date"{...register('date', {
                    required:{
                        value: true,
                        message: "La fecha de nacimiento es requerida"
                    }
                })} />

                <button className="btn btn-primary" type="submit" >
                    Registrarse
                </button>
            </form>

        </>
    )
}

export default Register; 