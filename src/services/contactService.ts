import type { Contact, ContactForm } from "../features/contacts/types"

const BASE_URL = 'http://localhost:3001'

export const contactService = {
   async getAll(): Promise<Contact[]> {
    const response = await fetch(`${BASE_URL}/contacts`)
    return response.json()
   },
   async create(contact: ContactForm): Promise<Contact> {
    const response = await fetch(`${BASE_URL}/contacts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(contact),
    })
    return response.json()
   },
   async update(id: number, contact: ContactForm): Promise<Contact> {
    const response = await fetch(`${BASE_URL}/contacts/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(contact),
    })
    return response.json()
   },
   async delete(id: number): Promise<void> {
    const response = await fetch(`${BASE_URL}/contacts/${id}`, {
        method: 'DELETE',
    })
    return response.json()
   },
}