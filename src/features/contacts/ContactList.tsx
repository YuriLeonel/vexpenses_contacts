import { useEffect, useState } from 'react'
import type { Contact } from './types'
import { contactService } from '../../services/contactService'
import { groupContacts } from './utils'
import { toast } from 'react-toastify'
import { Actions, ContactCard, Group, GroupHeader, ListWrapper } from './ContactList.styles'

type Props = {
    onEdit: (contact: Contact) => void;
    search: string;
};

export function ContactList({ onEdit, search }: Props) {
    const [contacts, setContacts] = useState<Contact[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
       contactService.getAll().then((data) => {
        setContacts(data);
       }).catch((error) => {
        toast.error('Failed to fetch contacts')
        console.error(error)
       }).finally(() => setLoading(false))
    }, [])

    const handleDelete = (id: number) => {
        contactService.delete(id).then(() => {
            setContacts(contacts.filter((contact) => contact.id !== id))
            toast.success('Contact deleted successfully')
        }).catch((error) => {
            toast.error('Failed to delete contact')
            console.error(error)
        })
    }

    const filteredContacts = contacts.filter((contact) => `${contact.firstName} ${contact.lastName}`.toLowerCase().includes(search.toLowerCase()))

    const groupedContacts = groupContacts(filteredContacts);

    if (loading) return <div>Loading Contacts...</div>
    if (contacts.length === 0) return <div>No contacts found</div>

    return (
        <ListWrapper>
            {Object.entries(groupedContacts).map(([group, groupContacts]) => (
                <Group key={group}>
                    <GroupHeader>{group}</GroupHeader>
                    {groupContacts.map((contact) => (
                        <ContactCard key={contact.id}>
                            <strong>{contact.firstName} {contact.lastName}</strong>
                            <p>{contact.email}</p>
                            <Actions>
                                <button onClick={() => onEdit(contact)}>Edit</button>
                                <button onClick={() => handleDelete(contact.id)}>Delete</button>
                            </Actions>
                        </ContactCard>
                    ))}
                </Group>
            ))}
        </ListWrapper>
    )
}