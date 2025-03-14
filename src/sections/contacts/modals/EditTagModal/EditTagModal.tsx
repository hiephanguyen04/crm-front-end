// src/pages/Contacts/modals/EditListModal.tsx
import { MenuIcon, TagIcon } from "@/assets/icons";
import Modal from "@/components/common/Models/Modal";
import { Tag } from "@/types";
import React, { useEffect, useState } from "react";
import "../EditListModal/EditListModal.scss";
interface EditTagModalProps {
  tag: Tag;
  onClose: () => void;
  onSave: (id: string, name: string) => void;
  isOpen: boolean;
}

const EditTagModal: React.FC<EditTagModalProps> = ({
  tag,
  onClose,
  isOpen,
  onSave,
}) => {
  const [tagName, setTagName] = useState(tag.name);
  const [selectedColor, setSelectedColor] = useState(tag.color);
  const [showColorPicker, setShowColorPicker] = useState(false);

  useEffect(() => {
    setTagName(tag.name);
  }, [tag]);

  const handleSave = () => {
    if (tagName.trim()) {
      onSave(tag.id, tagName.trim());
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <div className="container ">
        <div className="header">
          <TagIcon />

          <div className="title">Ajouter étiquette</div>
        </div>

        <div className="form">
          <div className="form-group">
            <div className="color-selector">
              <button
                className="color-button"
                style={{ backgroundColor: selectedColor }}
                onClick={() => setShowColorPicker(!showColorPicker)}
              ></button>
            </div>
            <input
              type="text"
              value={tagName}
              onChange={(e) => setTagName(e.target.value)}
              className="form-input"
            />
            <button
              className="form-input-clear"
              onClick={() => setTagName("")}
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
            disabled={!tagName.trim()}
          >
            Sauvegarder
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default EditTagModal;
