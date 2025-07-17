import React, { useCallback } from "react"
import { useForm, useFieldArray } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import { contactSchema } from "./schema"
import type { ContactForm as ContactFormType } from "./types"
import { toast } from "react-toastify"
import { 
    Form, 
    Field, 
    SectionField,
    SectionTitle, 
    SubmitButton, 
    ActionButton, 
    RemoveButton,
    FieldRow,
    ErrorMessage,
    FormActions,
    SectionActions,
    ButtonText
} from "../../components/FormComponents"
import styled from 'styled-components'

type Props = {
    initialValues?: ContactFormType;
    onSubmit: (data: ContactFormType) => void;
};

const ButtonIcon = styled.span`
    font-size: 1.125rem;
    line-height: 1;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
`

export const ContactForm = React.memo<Props>(function ContactForm({ 
    initialValues, 
    onSubmit 
}) {
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

    const submitHandler = useCallback((data: ContactFormType) => {
        toast.success(initialValues ? 'Contact updated successfully' : 'Contact created successfully')
        onSubmit(data)
    }, [initialValues, onSubmit]);

    const handleAddPhone = useCallback(() => {
        addPhone({ value: '' });
    }, [addPhone]);

    const handleAddAddress = useCallback(() => {
        addAddress({ value: '' });
    }, [addAddress]);

    const handleRemovePhone = useCallback((index: number) => {
        removePhone(index);
    }, [removePhone]);

    const handleRemoveAddress = useCallback((index: number) => {
        removeAddress(index);
    }, [removeAddress]);

    return (
        <Form onSubmit={handleSubmit(submitHandler)} noValidate>
            <Field>
                <label htmlFor="firstName">First Name *</label>
                <input 
                    id="firstName"
                    {...register('firstName')}
                    aria-invalid={errors.firstName ? 'true' : 'false'}
                    aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                />
                {errors.firstName && (
                    <ErrorMessage id="firstName-error" role="alert">
                        {errors.firstName.message}
                    </ErrorMessage>
                )}
            </Field>
            
            <Field>
                <label htmlFor="lastName">Last Name *</label>
                <input 
                    id="lastName"
                    {...register('lastName')}
                    aria-invalid={errors.lastName ? 'true' : 'false'}
                    aria-describedby={errors.lastName ? 'lastName-error' : undefined}
                />
                {errors.lastName && (
                    <ErrorMessage id="lastName-error" role="alert">
                        {errors.lastName.message}
                    </ErrorMessage>
                )}
            </Field>
            
            <Field>
                <label htmlFor="email">Email *</label>
                <input 
                    id="email"
                    type="email"
                    {...register('email')}
                    aria-invalid={errors.email ? 'true' : 'false'}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                    <ErrorMessage id="email-error" role="alert">
                        {errors.email.message}
                    </ErrorMessage>
                )}
            </Field>

            <SectionTitle>Phone Numbers</SectionTitle>
            <div role="group" aria-labelledby="phones-section">
                {phones.map((phone, index) => (
                    <SectionField key={phone.id}>
                        <FieldRow>
                            <div>
                                <label htmlFor={`phone-${index}`}>
                                    Phone {index + 1}
                                </label>
                                <input 
                                    id={`phone-${index}`}
                                    type="tel"
                                    {...register(`phones.${index}.value`)} 
                                    placeholder="Phone number"
                                    aria-invalid={errors.phones?.[index]?.value ? 'true' : 'false'}
                                    aria-describedby={errors.phones?.[index]?.value ? `phone-${index}-error` : undefined}
                                />
                                {errors.phones?.[index]?.value && (
                                    <ErrorMessage id={`phone-${index}-error`} role="alert">
                                        {errors.phones[index].value.message}
                                    </ErrorMessage>
                                )}
                            </div>
                            {phones.length > 1 && (
                                <RemoveButton 
                                    type="button" 
                                    onClick={() => handleRemovePhone(index)}
                                    aria-label={`Remove phone ${index + 1}`}
                                >
                                    <ButtonIcon aria-hidden="true">−</ButtonIcon>
                                    <ButtonText>Remove</ButtonText>
                                </RemoveButton>
                            )}
                        </FieldRow>
                    </SectionField>
                ))}
                <SectionActions>
                    <ActionButton 
                        type="button" 
                        onClick={handleAddPhone}
                        aria-label="Add phone number"
                    >
                        <ButtonIcon aria-hidden="true">+</ButtonIcon>
                        <ButtonText>Add Phone</ButtonText>
                    </ActionButton>
                </SectionActions>
            </div>

            <SectionTitle>Addresses</SectionTitle>
            <div role="group" aria-labelledby="addresses-section">
                {addresses.map((address, index) => (
                    <SectionField key={address.id}>
                        <FieldRow>
                            <div>
                                <label htmlFor={`address-${index}`}>
                                    Address {index + 1}
                                </label>
                                <input 
                                    id={`address-${index}`}
                                    {...register(`addresses.${index}.value`)} 
                                    placeholder="Address"
                                    aria-invalid={errors.addresses?.[index]?.value ? 'true' : 'false'}
                                    aria-describedby={errors.addresses?.[index]?.value ? `address-${index}-error` : undefined}
                                />
                                {errors.addresses?.[index]?.value && (
                                    <ErrorMessage id={`address-${index}-error`} role="alert">
                                        {errors.addresses[index].value.message}
                                    </ErrorMessage>
                                )}
                            </div>
                            {addresses.length > 1 && (
                                <RemoveButton 
                                    type="button" 
                                    onClick={() => handleRemoveAddress(index)}
                                    aria-label={`Remove address ${index + 1}`}
                                >
                                    <ButtonIcon aria-hidden="true">−</ButtonIcon>
                                    <ButtonText>Remove</ButtonText>
                                </RemoveButton>
                            )}
                        </FieldRow>
                    </SectionField>
                ))}
                <SectionActions>
                    <ActionButton 
                        type="button" 
                        onClick={handleAddAddress}
                        aria-label="Add address"
                    >
                        <ButtonIcon aria-hidden="true">+</ButtonIcon>
                        <ButtonText>Add Address</ButtonText>
                    </ActionButton>
                </SectionActions>
            </div>

            <FormActions>
                <SubmitButton type="submit">
                    {initialValues ? 'Update Contact' : 'Create Contact'}
                </SubmitButton>
            </FormActions>
        </Form>
    );
});