import { useForm } from 'react-hook-form';
import Button from '../../atoms/Button'

import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup"

import { 
    ContainerForm, 
    ContainerInput, 
    ContainerTitle, 
    ErrorMessage, 
    StyledForm, 
    StyledInput, 
    StyledTextArea } from "./style";

const schema = yup.object({
    name: yup.string().required('Can’t be empty'),
    email: yup.string().email('Please use a valid email address').required('Can’t be empty'),
    phone: yup.string(),
    message: yup.string().required('Can’t be empty'),
})

export default function ContactForm() {

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset

    } = useForm({resolver: yupResolver(schema)})

    const onSubmit = (data) => {
        console.log(data)
        reset()
    }

    return (
        <ContainerForm>

            <ContainerTitle>
                <h4>Contact Us</h4>
                <p>
                Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.
                </p>
            </ContainerTitle>

            <StyledForm onSubmit={handleSubmit(onSubmit)}>
                <ContainerInput>
                    <StyledInput 
                        placeholder="Name"
                        {...register("name")}
                        autocomplete="off"
                    />
                    <ErrorMessage>
                        {errors?.name?.message}
                    </ErrorMessage>
                </ContainerInput>

                <ContainerInput>
                    <StyledInput 
                        placeholder="Email Address"
                        {...register("email")}
                    />
                    <ErrorMessage>{errors?.email?.message}</ErrorMessage>
                </ContainerInput>

                <ContainerInput>
                    <StyledInput 
                        placeholder="Phone"
                        {...register("phone")}
                    />
                </ContainerInput>

                <ContainerInput>
                    <StyledTextArea 
                        placeholder="Your Message"
                        {...register("message")}
                    />
                    <ErrorMessage>{errors?.message?.message}</ErrorMessage>
                </ContainerInput>

                <Button
                    theme={'dark'}
                    text={'Submit'}
                    type={'submit'}
                />
            </StyledForm>

        </ContainerForm>
    )
}