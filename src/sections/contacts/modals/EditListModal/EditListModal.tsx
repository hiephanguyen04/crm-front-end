// src/pages/Contacts/modals/EditListModal.tsx
import { MenuIcon } from "@/assets/icons";
import Modal from "@/components/common/Models/Modal";
import { List } from "@/types";
import React, { useEffect, useState } from "react";
import "./EditListModal.scss";
interface EditListModalProps {
  list: List;
  onClose: () => void;
  onSave: (id: string, name: string) => void;
  isOpen: boolean;
}

const EditListModal: React.FC<EditListModalProps> = ({
  list,
  onClose,
  isOpen,
  onSave,
}) => {
  const [listName, setListName] = useState(list.name);

  useEffect(() => {
    setListName(list.name);
  }, [list]);

  const handleSave = () => {
    if (listName.trim()) {
      onSave(list.id, listName.trim());
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <div className="container ">
        <div className="header">
          <MenuIcon />

          <div className="title">Modifier liste</div>
        </div>

        <div className="form">
          <div className="form-group">
            <input
              type="text"
              value={listName}
              onChange={(e) => setListName(e.target.value)}
              className="form-input"
            />
            <button
              className="form-input-clear"
              onClick={() => setListName("")}
              tabIndex={-1}
            >
              <svg width="16" height="16" viewBox="0 0 24 24">
                <path
                  d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="footer">
          <button className="btn-cancel" onClick={onClose}>
            Annuler
          </button>
          <button
            className="btn-save"
            onClick={handleSave}
            disabled={!listName.trim()}
          >
            Sauvegarder
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default EditListModal;
