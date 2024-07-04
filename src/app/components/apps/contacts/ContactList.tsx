'use client'
import React, { useContext } from 'react';
import { IconStar } from '@tabler/icons-react';
import { ContactContext } from '@/app/context/Conatactcontext/index';
import { ContactType } from '@/app/(DashboardLayout)/types/apps/contact';
import { Icon } from "@iconify/react";
import Image from 'next/image';

function ContactList() {
  const {
    selectedDepartment,
    contacts,
    deleteContact,
    starredContacts,
    toggleStarred,
    setSelectedContact,
    selectedContact,
    searchTerm
  }: any = useContext(ContactContext);

  // Handle click on delete contact
  const handleDeleteClick = (contactId: number | any) => {
    deleteContact(contactId);
  };

  // Filter contacts based on selected department and search query
  const filterContacts = (contacts: ContactType[], selectedDepartment: string, search: string): ContactType[] => {
    let filteredContacts = [...contacts];

    if (selectedDepartment !== 'All') {
      if (selectedDepartment === 'Frequent') {
        filteredContacts = filteredContacts.filter((contact) => contact.frequentlycontacted);
      } else if (selectedDepartment === 'Starred') {
        filteredContacts = filteredContacts.filter((contact) => starredContacts.includes(contact.id));
      } else {
        filteredContacts = filteredContacts.filter((contact) => contact.department === selectedDepartment);
      }
    }

    if (searchTerm.trim() !== '') {
      const searchTermLower = search.toLowerCase();
      filteredContacts = filteredContacts.filter(
        (contact) =>
          contact.firstname.toLowerCase().includes(searchTermLower) || contact.lastname.toLowerCase().includes(searchTermLower)
      );
    }

    return filteredContacts;
  };

  // Get filtered contacts based on selected department and search query
  const filteredContacts = filterContacts(contacts, selectedDepartment, searchTerm);

  // Handle click on a contact to view details
  const handleContactClick = (contact: ContactType) => {
    setSelectedContact(contact);
  };

  return (
    <div className="border-right border-color-divider bg-background-paper h-full w-320">
      {selectedDepartment === 'Starred' && filteredContacts.length === 0 ? (
        <p>  No starred contacts available.</p>
      ) : searchTerm !== '' && filteredContacts.length === 0 ? (
        <p>No contacts found.</p>
      ) : (
        <div>

          {filteredContacts.map((contact) => (
            <div
              key={contact.id}
              className={`cursor-pointer ${selectedContact && selectedContact.id === contact.id ? 'bg-action.selected' : 'bg-background.paper'
                }`}
              onClick={() => handleContactClick(contact)}
            >
              {/* <Avatar img={contact.image} alt="avatar of Jese" rounded /> */}
              <Image src={contact.image} width={50} height={50} alt='name' />
              <p>
                {contact.firstname} {contact.lastname}
              </p>
              <p>
                {contact.department}
              </p>
              <div className="flex">
                <div className="mr-2" onClick={() => toggleStarred(contact.id)}>

                  {starredContacts.includes(contact.id) ? (
                    <IconStar className="text-yellow-500" size="13" fill="rgb(255, 193, 7)" />
                  ) : (
                    <IconStar size="13" />
                  )}
                </div>
                <div onClick={() => handleDeleteClick(contact.id)}>
                  <Icon icon='solar:trash-bin-2-outline' />
                </div>
              </div>
            </div>
          ))}

        </div>
      )
      }
    </div >
  );
}
export default ContactList;


