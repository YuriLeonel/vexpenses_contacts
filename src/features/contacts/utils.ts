import type { Contact } from './types'

export function groupContacts(contacts: Contact[]): Record<string, Contact[]> {
    const groupedContacts: Record<string, Contact[]> = {}

    contacts.forEach((contact) => {
        const key = contact.firstName.charAt(0).toUpperCase()

        if (!groupedContacts[key]) {
            groupedContacts[key] = []
        }
        groupedContacts[key].push(contact)
    })

    return Object.fromEntries(Object.entries(groupedContacts).sort((a, b) => a[0].localeCompare(b[0]))) as Record<string, Contact[]>
}