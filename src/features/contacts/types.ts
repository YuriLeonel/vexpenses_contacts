export type Phone = {
    label?: string
    value: string
}

export type Address = {
    label?: string
    value: string
}

export type Contact ={
    id: number
    firstName: string
    lastName: string
    email: string
    phones: Phone[]
    addresses: Address[]
    createdAt: string
    updatedAt: string
}

export type ContactForm = Omit<Contact, 'id' | 'createdAt' | 'updatedAt'>