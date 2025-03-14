import React from "react";
import "./ContactsTable.scss";
import { Contact } from "@/types";
import {
  EditIcon,
  EmailIcon,
  PhoneIcon,
  RemoveIcon,
  SettingIcon,
} from "@/assets/icons";

interface ContactsTableProps {
  contacts: Contact[];
  selectedContacts: string[];
  onContactSelect: (contactId: string) => void;
  onSelectAll: () => void;
  allContactsSelected: boolean;
}

const ContactsTable: React.FC<ContactsTableProps> = ({
  contacts,
  selectedContacts,
  onContactSelect,
  onSelectAll,
  allContactsSelected,
}) => {
  return (
    <div className="contacts-table">
      <table>
        <thead>
          <tr>
            <th className="checkbox-col">
              <input
                type="checkbox"
                checked={allContactsSelected}
                onChange={onSelectAll}
              />
            </th>
            <th className="name-col">Nom du contact</th>
            <th className="email-col">Email</th>
            <th className="phone-col">Téléphone</th>
            <th className="opportunity-col">Opportunité</th>
            <th className="owner-col">Responsable</th>
            <th className="tags-col">Étiquettes</th>
            <th className="actions-col">
              <SettingIcon />
            </th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id} className="contact-row">
              <td className="checkbox-col">
                <input
                  type="checkbox"
                  checked={selectedContacts.includes(contact.id)}
                  onChange={() => onContactSelect(contact.id)}
                />
              </td>
              <td className="name-col">
                <div className="contact-name">{contact.name}</div>
                <div className="contact-type">{contact.type}</div>
              </td>
              <td className="email-col">
                <div className="email-icon">
                  <EmailIcon />
                  {contact.email}
                </div>
              </td>
              <td className="phone-col">
                <div className="phone-icon">
                  <PhoneIcon />
                  {contact.phone}
                </div>
              </td>
              <td className="opportunity-col">{contact.opportunity}</td>
              <td className="owner-col">
                <div className="owner">
                  {contact.owner.avatar ? (
                    <img
                      src={contact.owner.avatar}
                      alt={`${contact.owner.name} Avatar`}
                      className="owner-avatar"
                    />
                  ) : (
                    <div className="owner-avatar-placeholder">
                      {contact.owner.name.charAt(0)}
                    </div>
                  )}
                  <span>{contact.owner.name}</span>
                </div>
              </td>
              <td className="tags-col">
                <div className="tags">
                  {contact.tags.map((tag) => (
                    <span key={tag} className={`tag ${tag}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </td>
              <td className="actions-col">
                <button className="edit-button">
                  <EditIcon />
                </button>
                <button className="delete-button">
                  <RemoveIcon />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactsTable;
