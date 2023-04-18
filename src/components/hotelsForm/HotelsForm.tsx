import { Formik, Form, Field, ErrorMessage as FormikErrorMessage } from "formik";
import * as Yup from 'yup';
import { requestHotels } from "../../store/action-creators/hotels";
import {useEffect} from 'react'
import { useDispatch } from "react-redux"
import { HotelParams } from "../../types/hotels";
import './hotelsForm.sass'



const HotelsForm = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        updateHotels(initialParams())
    }, [])

    const initialParams = () => {
        return {
            location: "Москва",
            date: new Date().toLocaleString().replace(/\//g, '-').slice(0, 10).split('.').reverse().join('-'), 
            days: 1
        }
    }

    const updateHotels = (params: HotelParams) => {
        const currDate = new Date()
        currDate.setDate(currDate.getDate() + Number(params.days))
        const checkOutDate = new Date(currDate).toLocaleString().slice(0, 10)
        const requestParams = {
            location: "Москва",
            days: +params.days,
            checkIn: params.date.split('.').reverse().join('-'),
            checkOut: checkOutDate.split('.').reverse().join('-'),

        }
        dispatch(requestHotels(requestParams))
    }

    return (
        <div className="form-wrapper">
            <Formik
                initialValues={
                    initialParams()
                }
                validationSchema={Yup.object({
                })}
                onSubmit={(params) => {
                    updateHotels(params)
                }}
            >
                <Form className="hotels-form">
                    <label htmlFor="location" className="hotels-form__label">Локация</label>
                    <Field id='location' name='location' type='text' className='hotels-form__input'/>
                    <FormikErrorMessage className="hotels-form__error login" name="location" component="div" />
                    <label htmlFor="date" className="hotels-form__label">Дата заселения</label>
                    <Field id='date' name='date' type='date' className='hotels-form__input'/>
                    <FormikErrorMessage className="hotels-form__error password" name="date" component="div" />
                    <label htmlFor="days" className="hotels-form__label">Количество дней</label>
                    <Field id='days' name='days' type='text' className='hotels-form__input'/>
                    <FormikErrorMessage className="hotels-form__error password" name="days" component="div" />
                    <button className="hotels-form__btn" type="submit">Найти</button>
                </Form>

            </Formik>
        </div>
    )
}

export default HotelsForm;