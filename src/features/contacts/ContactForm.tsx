import { useForm, useFieldArray } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import { contactSchema } from "./schema"
import type { ContactForm as ContactFormType } from "./types"
import { toast } from "react-toastify"
import { Form, Field, SectionTitle, SubmitButton } from "../../components/FormComponents"

type Props = {
    initialValues?: ContactFormType;
    onSubmit: (data: ContactFormType) => void;
};

export const ContactForm: React.FC<Props> = ({ initialValues, onSubmit }) => {
    const { register, control, handleSubmit, formState: { errors } } = useForm<ContactFormType>({
        resolver: yupResolver(contactSchema),
        defaultValues: initialValues ?? {
            firstName: '',
            lastName: '',
            email: '',
            phones: [{ value: '' }] as ContactFormType['phones'],
            addresses: [{ value: '' }] as ContactFormType['addresses'],
        },
    });

    const { fields: phones, append: addPhone, remove: removePhone } = useFieldArray({
        control: control,
        name: 'phones',
    })

    const { fields: addresses, append: addAddress, remove: removeAddress } = useFieldArray({
        control: control,
        name: 'addresses',
    })

    const submitHandler = (data: ContactFormType) => {
        toast.success('Contact created successfully')
        onSubmit(data)
    }

    return (
        <Form onSubmit={handleSubmit(submitHandler)}>
            <Field>
                <label>First Name</label>
                <input {...register('firstName')}/>
                {errors.firstName && <span>{errors.firstName.message}</span>}
            </Field>
            <Field>
                <label>Last Name</label>
                <input {...register('lastName')}/>
                {errors.lastName && <span>{errors.lastName.message}</span>}
            </Field>
            <Field>
                <label>Email</label>
                <input {...register('email')}/>
                {errors.email && <span>{errors.email.message}</span>}
            </Field>

            <SectionTitle>Phone Numbers</SectionTitle>
            {phones.map((phone, index) => (
                <Field key={phone.id}>
                    <input {...register(`phones.${index}.value`)} placeholder="Phone number"/>
                    <button type="button" onClick={() => removePhone(index)}>Remove</button>
                    {errors.phones?.[index]?.value && <span>{errors.phones[index].value.message}</span>}
                </Field>
            ))}
            <button type="button" onClick={() => addPhone({ value: '' })}>Add Phone</button>

            <SectionTitle>Addresses</SectionTitle>
            {addresses.map((address, index) => (
                <Field key={address.id}>
                    <input {...register(`addresses.${index}.value`)} placeholder="Address"/>
                    <button type="button" onClick={() => removeAddress(index)}>Remove</button>
                    {errors.addresses?.[index]?.value && <span>{errors.addresses[index].value.message}</span>}
                </Field>
            ))}
            <button type="button" onClick={() => addAddress({ value: '' })}>Add Address</button>

            <SubmitButton type="submit">Save Contact</SubmitButton>
        </Form>
    );
}