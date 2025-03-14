import React, { useState } from "react";
import "./ActionBar.scss";
import { PlusIcon } from "@/assets/icons";
import SearchField from "@/components/common/Search/SearchField";
import { FilterOption } from "@/types";

interface SelectFilterProps {
  options: FilterOption[];
  value: string;
  onChange: (value: string) => void;
  icon?: React.ReactNode;
}

export const SelectFilter: React.FC<SelectFilterProps> = ({
  options,
  value,
  onChange,
  icon,
}) => {
  return (
    <div className="select-filter">
      {icon && <span className="filter-icon">{icon}</span>}
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

interface ActionBarProps {
  contactsCount: number;
  onSearch: (term: string) => void;
  searchTerm: string;
  filterOptions: {
    primary: FilterOption[];
    owner: FilterOption[];
  };
  selectedFilters: {
    primary: string;
    owner: string;
  };
  onFilterChange: (type: "primary" | "owner", value: string) => void;
  onExportClick: () => void;
  onAddListClick: () => void;
  onAddTagClick: () => void;
}

const ActionBar: React.FC<ActionBarProps> = ({
  contactsCount,
  onSearch,
  searchTerm,
  filterOptions,
  selectedFilters,
  onFilterChange,
  onExportClick,
  onAddListClick,
  onAddTagClick,
}) => {
  const [showSettingsMenu, setShowSettingsMenu] = useState(false);

  const handleAddListClick = () => {
    console.log("dsa");
    onAddListClick();
    setShowSettingsMenu(false);
  };

  const handleAddTagClick = () => {
    onAddTagClick();
    setShowSettingsMenu(false);
  };

  const handleExportClick = () => {
    onExportClick();
    setShowSettingsMenu(false);
  };

  return (
    <div className="contacts-actions">
      <div className="leftAction">
        <button className="action-button">
          <PlusIcon />
          Ajout de contact
        </button>

        <div className="contacts-count">
          <strong>{contactsCount}</strong> Contacts
        </div>
      </div>

      <div className="filter-actions">
        <SelectFilter
          options={filterOptions.primary}
          value={selectedFilters.primary}
          onChange={(value) => onFilterChange("primary", value)}
          icon={
            <svg width="14" height="14" viewBox="0 0 24 24">
              <path
                d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"
                fill="currentColor"
              />
            </svg>
          }
        />

        <SelectFilter
          options={filterOptions.owner}
          value={selectedFilters.owner}
          onChange={(value) => onFilterChange("owner", value)}
          icon={
            <svg width="14" height="14" viewBox="0 0 24 24">
              <path
                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                fill="currentColor"
              />
            </svg>
          }
        />
        <SearchField
          value={searchTerm}
          onSearch={onSearch}
          placeholder="Titre, contact, responsable..."
        />
        <div className="settings-dropdown">
          <button
            className="setting"
            onClick={() => setShowSettingsMenu(!showSettingsMenu)}
          >
            <svg width="14" height="14" viewBox="0 0 24 24">
              <path
                d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"
                fill="currentColor"
              />
            </svg>
          </button>

          {showSettingsMenu && (
            <div className="settings-menu">
              <div className="settings-item" onClick={handleAddListClick}>
                Créer / Éditer une Liste
              </div>
              <div className="settings-item" onClick={handleAddTagClick}>
                Créer / Éditer une Étiquette
              </div>
              <div className="settings-item" onClick={handleExportClick}>
                Exporter les résultats du filtre...
              </div>
              <div className="settings-item">Importer des données</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ActionBar;
