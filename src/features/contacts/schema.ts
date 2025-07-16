import * as yup from 'yup'

export const contactSchema = yup.object().shape({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    email: yup.string().email('Must be a valid email').required('Email is required'),
    phones: yup.array().of(yup.object().shape({
        value: yup
            .string()
            .matches(
                /^\+?[1-9]\d{1,14}$/,
                'Invalid phone number. Must be in international format, e.g. +5516999999999'
            )
            .required('Phone is required'),
        label: yup.string().optional(),
    })).min(1, 'At least one phone is required').required(),
    addresses: yup.array().of(yup.object().shape({
        value: yup.string().required('Address is required'),
        label: yup.string().optional(),
    })).min(1, 'At least one address is required').required(),
})