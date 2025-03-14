// src/pages/Contacts/modals/ListsModal.tsx
import { EditIcon, MenuIcon, PlusIcon, RemoveIcon } from "@/assets/icons";
import Modal from "@/components/common/Models/Modal";
import SearchField from "@/components/common/Search/SearchField";

import { List } from "@/types";
import React, { useState } from "react";
import "./ListsModal.scss";
interface ListsModalProps {
  lists: List[];
  onClose: () => void;
  onAddList: () => void;
  onEditList: (listId: string) => void;
  isOpen: boolean;
}

const ListsModal: React.FC<ListsModalProps> = ({
  lists,
  onClose,
  onAddList,
  onEditList,
  isOpen,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredLists = lists?.filter((list) =>
    list.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEditList = (listId: string) => {
    onEditList(listId);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <div className="container-list-model">
        <div className="header">
          <MenuIcon />

          <div className="title">
            Liste <span> de contact</span>
          </div>
          <SearchField
            value={searchTerm}
            onSearch={setSearchTerm}
            placeholder="Recherche"
            className="search"
          />
          <button className="action-button" onClick={onAddList}>
            <PlusIcon />
            Ajouter une liste
          </button>
        </div>
        <div className="wrap-table">
          <table>
            <thead>
              <tr>
                <th className="name-col">Nom de la liste</th>
                <th className="email-col">Contact</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filteredLists.map((list) => (
                <tr key={list.id} className="contact-row">
                  <td className="checkbox-col">
                    <div className="table-column-name">{list.name}</div>
                  </td>
                  <td className="checkbox-col">
                    <div className="table-column-count">
                      {list.contactCount}
                    </div>
                  </td>

                  <td className="actions-col">
                    <button
                      className="edit-button"
                      onClick={() => handleEditList(list.id)}
                    >
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
      </div>
    </Modal>
  );
};

export default ListsModal;
