// src/models/types.ts

export interface User {
  id: string;
  email: string;
  fullName: string;
  role: "admin" | "user";
  avatar?: string;
  position?: string;
}

export interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  type: "Particulier" | "Enterprise";
  opportunity?: string;
  assignedTo?: string;
  tags: string[];
  createdAt: string;
}

export interface Task {
  id: string;
  title: string;
  type: "Appel" | "E-mail" | "À faire";
  dueDate: string;
  contact: string;
  assignedTo: string;
  completed: boolean;
  createdAt: string;
}

export interface Tag {
  id: string;
  name: string;
  color: string;
  contactCount: number;
}

// src/types/contacts.types.ts

export interface Contact {
  id: string;
  name: string;
  type: string;
  email: string;
  phone: string;
  opportunity: string;
  owner: {
    name: string;
    avatar?: string;
  };
  tags: string[];
}

export type TabType = "contacts" | "lists" | "tags" | "opportunities" | "tasks";

export interface FilterOption {
  label: string;
  value: string;
}

export interface ContactsState {
  selectedContacts: string[];
  activeTab: TabType;
  searchTerm: string;
  filterOptions: {
    primary: string;
    owner: string;
  };
  showListsModal: boolean;
  showTagsModal: boolean;
  showAddListModal: boolean;
  showEditListModal: boolean;
  showAddTagModal: boolean;
  showEditTagModal: boolean;
  showExportModal: boolean;
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
}

export interface List {
  id: string;
  name: string;
  contactCount: number;
}

export interface Tag {
  id: string;
  name: string;
  color: string;
  contactCount: number;
}
export interface Contact {
  id: string;
  name: string;
  type: string;
  email: string;
  phone: string;
  opportunity: string;
  owner: {
    name: string;
    avatar?: string;
  };
  tags: string[];
}

export interface ContactsState {
  selectedContacts: string[];
  activeTab: string;
  searchTerm: string;
  filterOptions: {
    primary: string;
    owner: string;
  };
  showListsModal: boolean;
  showTagsModal: boolean;
  showAddListModal: boolean;
  showEditListModal: boolean;
  showAddTagModal: boolean;
  showEditTagModal: boolean;
  showExportModal: boolean;
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
}

export interface FilterOption {
  label: string;
  value: string;
}

export type OpportunityPhase =
  | "Non traité"
  | "Injoignable"
  | "Closing en cours"
  | "En négociation"
  | "En cours"
  | "Gagné"
  | "Perdu";

export interface Opportunity {
  id: string;
  name: string;
  organization: string;
  contact: string;
  phase: OpportunityPhase;
  value: number;
  closingDate?: string;
  phone?: string;
  email?: string;
  owner: {
    id: string;
    name: string;
    avatar?: string;
  };
  tags: string[];
  score?: number;
  reason?: string;
}

export interface OpportunitiesState {
  selectedOpportunities: string[];
  viewMode: "list" | "kanban";
  searchTerm: string;
  filterOptions: {
    primary: string;
    owner: string;
  };
  showCreateModal: boolean;
  showEditModal: boolean;
  currentOpportunity: Opportunity | null;
  pipelineMode: boolean;
}

export const phaseColors: Record<string, string> = {
  "Non traité": "yellow",
  Injoignable: "orange",
  "Closing en cours": "blue",
  "En cours": "blue",
  "En négociation": "teal",
  Gagné: "green",
  Perdu: "red",
};
