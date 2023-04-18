import { Formik, Form, Field, ErrorMessage as FormikErrorMessage } from "formik";
import './modal.sass'
import * as Yup from 'yup';

const Modal = () => {
    return (
        <div className="modal">
            <Formik
                initialValues={{
                    login: "",
                    password: ""
                }}
                validationSchema={Yup.object({
                    login: Yup.string().email('Логин должен быть валидным').required("Обязательное поле"),
                    password: Yup.string().min(8, "Минимум 8 символов!").required("Обязательное поле"),
                })}
                onSubmit={({ login, password }) => {
                    // updateChar(charName);
                }}
            >
                <Form className="auth-form">
                    <h1 className="auth-form__header">Simple Hotel Check</h1>
                    <label htmlFor="login" className="auth-form__label">Логин</label>
                    <Field id='login' name='login' type='text' className='auth-form__input'/>
                    <FormikErrorMessage className="auth-form__error login" name="login" component="div" />
                    <label htmlFor="password" className="auth-form__label">Пароль</label>
                    <Field id='password' name='password' type='text' className='auth-form__input'/>
                    <FormikErrorMessage className="auth-form__error password" name="password" component="div" />
                    <button className="auth-form__btn" type="submit">Войти</button>
                    {/* <FormikErrorMessage className="auth-form__error" name="charName" component="div" /> */}
                </Form>

            </Formik>

        </div>
    )
}

export default Modal;