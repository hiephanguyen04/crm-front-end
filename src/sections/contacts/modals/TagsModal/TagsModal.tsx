// src/pages/Contacts/modals/ListsModal.tsx
import { EditIcon, PlusIcon, RemoveIcon, TagIcon } from "@/assets/icons";
import Modal from "@/components/common/Models/Modal";
import SearchField from "@/components/common/Search/SearchField";

import { Tag } from "@/types";
import React, { useState } from "react";
import "../ListsModal/ListsModal.scss";

interface ListsModalProps {
  tags: Tag[];
  onClose: () => void;
  onAddTag: () => void;
  onEditTag: (listId: string) => void;
  isOpen: boolean;
}

const TagsModal: React.FC<ListsModalProps> = ({
  tags,
  onClose,
  onAddTag,
  onEditTag,
  isOpen,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTags = tags.filter((tag) =>
    tag.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEditTask = (listId: string) => {
    onEditTag(listId);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <div className="container-list-model">
        <div className="header">
          <TagIcon />
          <div className="title">Étiquettes</div>
          <SearchField
            value={searchTerm}
            onSearch={setSearchTerm}
            placeholder="Recherche"
            className="search"
          />
          <button className="action-button" onClick={onAddTag}>
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
              {filteredTags.map((tag) => (
                <tr key={tag.id} className="contact-row">
                  <td className="checkbox-col">
                    <div className="modal-table-column-name">
                      <span
                        className="tag-color-indicator"
                        style={{ backgroundColor: tag.color }}
                      >
                        {tag.name}
                      </span>
                    </div>
                  </td>
                  <td className="checkbox-col">
                    <div className="table-column-count">{tag.contactCount}</div>
                  </td>

                  <td className="actions-col">
                    <button
                      className="edit-button"
                      onClick={() => handleEditTask(tag.id)}
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

export default TagsModal;
