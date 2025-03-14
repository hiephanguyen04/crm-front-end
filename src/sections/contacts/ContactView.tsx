import { useState } from "react";
import ActionBar from "./components/ActionBar";
import { Contact, ContactsState, FilterOption, List, Tag } from "@/types";
import { contactsData, listsData, tagsData } from "@/data/mockData";
import ContactsTable from "./components/ContactsTable";
import Pagination from "./components/Pagination/Pagination";
import EditListModal from "./modals/EditListModal/EditListModal";
import AddTagModal from "./modals/AddTagModal";
import EditTagModal from "./modals/EditTagModal/EditTagModal";
import ExportModal from "./modals/ExportModal";
import TagsModal from "./modals/TagsModal/TagsModal";
import ListsModal from "./modals/ListsModal/ListsModal";

const filterOptions: {
  primary: FilterOption[];
  owner: FilterOption[];
} = {
  primary: [{ label: "Plus de filtre", value: "" }],
  owner: [{ label: "Tout le monde", value: "" }],
};

const ContactView = () => {
  const [contacts, setContacts] = useState<Contact[]>(contactsData);
  const [lists, setLists] = useState<List[]>(listsData);
  const [tags, setTags] = useState<Tag[]>(tagsData);
  const [state, setState] = useState<ContactsState>({
    selectedContacts: [],
    activeTab: "contacts",
    searchTerm: "",
    filterOptions: {
      primary: "",
      owner: "",
    },
    showListsModal: false,
    showTagsModal: false,
    showAddListModal: false,
    showEditListModal: false,
    showAddTagModal: false,
    showEditTagModal: false,
    showExportModal: false,
    currentPage: 1,
    itemsPerPage: 10,
    totalItems: contactsData.length,
  });

  const indexOfLastContact = state.currentPage * state.itemsPerPage;
  const indexOfFirstContact = indexOfLastContact - state.itemsPerPage;
  const currentContacts = contacts.slice(
    indexOfFirstContact,
    indexOfLastContact
  );
  // Modal toggle functions
  const toggleListsModal = () => {
    setState({ ...state, showListsModal: !state.showListsModal });
  };

  const toggleTagsModal = () => {
    setState({ ...state, showTagsModal: !state.showTagsModal });
  };

  const toggleAddListModal = () => {
    setState({
      ...state,
      showAddListModal: !state.showAddListModal,
      showListsModal: false,
    });
  };

  const toggleEditListModal = () => {
    setState({
      ...state,
      showEditListModal: !state.showEditListModal,
      showListsModal: false,
    });
  };

  const toggleAddTagModal = () => {
    setState({
      ...state,
      showAddTagModal: !state.showAddTagModal,
      showTagsModal: false,
    });
  };

  const toggleEditTagModal = () => {
    setState({
      ...state,
      showEditTagModal: !state.showEditTagModal,
      showTagsModal: false,
    });
  };

  const toggleExportModal = () => {
    setState({ ...state, showExportModal: !state.showExportModal });
  };

  // Handle contact selection
  const handleContactSelect = (contactId: string) => {
    setState((prevState) => {
      if (prevState.selectedContacts.includes(contactId)) {
        return {
          ...prevState,
          selectedContacts: prevState.selectedContacts.filter(
            (id) => id !== contactId
          ),
        };
      } else {
        return {
          ...prevState,
          selectedContacts: [...prevState.selectedContacts, contactId],
        };
      }
    });
  };

  // Handle select all contacts
  const handleSelectAll = () => {
    setState((prevState) => {
      if (prevState.selectedContacts.length === contacts.length) {
        return { ...prevState, selectedContacts: [] };
      } else {
        return {
          ...prevState,
          selectedContacts: contacts.map((contact) => contact.id),
        };
      }
    });
  };

  // Handle search
  const handleSearch = (term: string) => {
    setState({ ...state, searchTerm: term });
  };

  // Handle filter changes
  const handleFilterChange = (type: "primary" | "owner", value: string) => {
    setState({
      ...state,
      filterOptions: {
        ...state.filterOptions,
        [type]: value,
      },
    });
  };

  // Handle pagination
  const handlePageChange = (page: number) => {
    setState({ ...state, currentPage: page });
  };

  // Handle items per page change
  const handleItemsPerPageChange = (itemsPerPage: number) => {
    setState({ ...state, itemsPerPage: itemsPerPage, currentPage: 1 });
  };
  console.log(state);
  return (
    <div>
      <ActionBar
        contactsCount={contacts.length}
        onSearch={handleSearch}
        searchTerm={state.searchTerm}
        filterOptions={filterOptions}
        selectedFilters={state.filterOptions}
        onFilterChange={handleFilterChange}
        onExportClick={toggleExportModal}
        onAddListClick={toggleListsModal}
        onAddTagClick={toggleTagsModal}
      />
      <ContactsTable
        contacts={currentContacts}
        selectedContacts={state.selectedContacts}
        onContactSelect={handleContactSelect}
        onSelectAll={handleSelectAll}
        allContactsSelected={
          state.selectedContacts.length === contacts.length &&
          contacts.length > 0
        }
      />
      <Pagination
        currentPage={state.currentPage}
        itemsPerPage={state.itemsPerPage}
        totalItems={contacts.length}
        onPageChange={handlePageChange}
        onItemsPerPageChange={handleItemsPerPageChange}
      />

      <ListsModal
        isOpen={state.showListsModal}
        lists={lists}
        onClose={toggleListsModal}
        onAddList={toggleAddListModal}
        onEditList={toggleEditListModal}
      />
      <TagsModal
        isOpen={state.showTagsModal}
        tags={tags}
        onClose={toggleTagsModal}
        onAddTag={toggleAddTagModal}
        onEditTag={toggleEditTagModal}
      />

      <EditListModal
        isOpen={state.showEditListModal}
        list={lists[0]}
        onClose={toggleEditListModal}
        onSave={(id, name) => {
          const updatedLists = lists.map((list) =>
            list.id === id ? { ...list, name } : list
          );
          setLists(updatedLists);
          toggleEditListModal();
        }}
      />
      <AddTagModal
        isOpen={state.showAddTagModal}
        onClose={toggleAddTagModal}
        onSave={(name, color) => {
          const newTag = {
            id: `tag-${tags.length + 1}`,
            name,
            color,
            contactCount: 0,
          };
          setTags([...tags, newTag]);
          toggleAddTagModal();
        }}
      />
      <EditTagModal
        isOpen={state.showEditTagModal}
        tag={tags[0]}
        onClose={toggleEditTagModal}
        onSave={(id, name) => {
          const updatedTags = tags.map((tag) =>
            tag.id === id ? { ...tag, name } : tag
          );
          setTags(updatedTags);
          toggleEditTagModal();
        }}
      />
      {state.showExportModal && (
        <ExportModal
          onClose={toggleExportModal}
          onExport={(format, filename, options) => {
            console.log(`Exporting ${format} with filename ${filename}`);
            console.log("Options:", options);
            toggleExportModal();
          }}
        />
      )}
    </div>
  );
};

export default ContactView;
