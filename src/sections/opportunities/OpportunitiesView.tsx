import React, { useState } from "react";
import CreateOpportunityModal from "./components/CreateOpportunityModal/CreateOpportunityModal";
import OpportunityKanban from "./components/OpportunityKanban/OpportunityKanban";
import OpportunityList from "./components/OpportunityList/OpportunityList";
import PipelineConfig from "./components/PipelineConfig/PipelineConfig";

import "./Opportunities.scss";
import { OpportunitiesState, Opportunity, phaseColors } from "@/types";
import { generateOpportunities } from "@/data/mockData";
import { MenuIcon, PlusIcon } from "@/assets/icons";
import { SelectFilter } from "../contacts/components/ActionBar";
import SearchField from "@/components/common/Search/SearchField";
import { Icon13 } from "@/assets/icons";

const OpportunitiesView: React.FC = () => {
  const [opportunities, setOpportunities] = useState<Opportunity[]>(
    generateOpportunities()
  );

  const [state, setState] = useState<OpportunitiesState>({
    selectedOpportunities: [],
    viewMode: "kanban",
    searchTerm: "",
    filterOptions: {
      primary: "",
      owner: "",
    },
    showCreateModal: false,
    showEditModal: false,
    currentOpportunity: null,
    pipelineMode: false,
  });

  const filteredOpportunities = opportunities.filter(
    (opportunity) =>
      opportunity.name.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
      opportunity.organization
        .toLowerCase()
        .includes(state.searchTerm.toLowerCase()) ||
      opportunity.contact.toLowerCase().includes(state.searchTerm.toLowerCase())
  );

  const totalValue = filteredOpportunities.reduce(
    (sum, opportunity) => sum + opportunity.value,
    0
  );

  const opportunitiesByPhase = {
    "Non traité": filteredOpportunities.filter(
      (opp) => opp.phase === "Non traité"
    ),
    Injoignable: filteredOpportunities.filter(
      (opp) => opp.phase === "Injoignable"
    ),
    "Closing en cours": filteredOpportunities.filter(
      (opp) => opp.phase === "Closing en cours"
    ),
    "En cours": filteredOpportunities.filter((opp) => opp.phase === "En cours"),
    "En négociation": filteredOpportunities.filter(
      (opp) => opp.phase === "En négociation"
    ),
    Gagné: filteredOpportunities.filter((opp) => opp.phase === "Gagné"),
    Perdu: filteredOpportunities.filter((opp) => opp.phase === "Perdu"),
  };

  const calculatePhaseTotal = (phase: any) => {
    return opportunitiesByPhase[phase].reduce((sum, opp) => sum + opp.value, 0);
  };

  const handleOpportunitySelect = (opportunityId: string) => {
    setState((prev) => {
      if (prev.selectedOpportunities.includes(opportunityId)) {
        return {
          ...prev,
          selectedOpportunities: prev.selectedOpportunities.filter(
            (id) => id !== opportunityId
          ),
        };
      } else {
        return {
          ...prev,
          selectedOpportunities: [...prev.selectedOpportunities, opportunityId],
        };
      }
    });
  };

  const handleSelectAll = () => {
    if (state.selectedOpportunities.length === filteredOpportunities.length) {
      setState({ ...state, selectedOpportunities: [] });
    } else {
      setState({
        ...state,
        selectedOpportunities: filteredOpportunities.map(
          (opportunity) => opportunity.id
        ),
      });
    }
  };

  const handleSearchChange = (e: string) => {
    setState({ ...state, searchTerm: e.target.value });
  };

  const toggleViewMode = (mode: "list" | "kanban") => {
    setState({ ...state, viewMode: mode });
  };

  const closeCreateModal = () => {
    setState({ ...state, showCreateModal: false });
  };

  const handleCreateOpportunity = (opportunity: Opportunity) => {
    setOpportunities([opportunity, ...opportunities]);
    closeCreateModal();
  };

  const togglePipelineMode = () => {
    setState({ ...state, pipelineMode: !state.pipelineMode });
  };

  const handleMassAction = (
    action: "assign" | "lost" | "won" | "move" | "delete"
  ) => {
    switch (action) {
      case "assign":
        break;
      case "lost":
        setOpportunities(
          opportunities.map((opp) =>
            state.selectedOpportunities.includes(opp.id)
              ? { ...opp, phase: "Perdu" }
              : opp
          )
        );
        setState({ ...state, selectedOpportunities: [] });
        break;
      case "won":
        setOpportunities(
          opportunities.map((opp) =>
            state.selectedOpportunities.includes(opp.id)
              ? { ...opp, phase: "Gagné" }
              : opp
          )
        );
        setState({ ...state, selectedOpportunities: [] });
        break;
      case "move":
        break;
      case "delete":
        setOpportunities(
          opportunities.filter(
            (opp) => !state.selectedOpportunities.includes(opp.id)
          )
        );
        setState({ ...state, selectedOpportunities: [] });
        break;
    }
  };

  const deselectAll = () => {
    setState({ ...state, selectedOpportunities: [] });
  };

  return (
    <div className="opportunities-container">
      <div className="content-wrapper">
        <main className="main-content opportunities-content">
          {state.pipelineMode ? (
            <PipelineConfig onCancel={togglePipelineMode} />
          ) : (
            <>
              <div className="opportunities-header">
                <div className="feature-left">
                  <div className="OpportunitiesView">
                    <div className="leftAction">
                      <button className="action-button">
                        <PlusIcon />
                        Ajout de contact
                      </button>
                    </div>
                  </div>

                  <div className="view-actions">
                    <button
                      className={`view-button ${
                        state.viewMode === "list" ? "active" : ""
                      }`}
                      onClick={() => toggleViewMode("list")}
                    >
                      <MenuIcon />
                    </button>

                    <button
                      className={`view-button ${
                        state.viewMode === "kanban" ? "active" : ""
                      }`}
                      onClick={() => toggleViewMode("kanban")}
                    >
                      <Icon13 />
                    </button>
                  </div>
                  <div className="opportunities-count">
                    <strong>{totalValue}€ </strong>•{" "}
                    {filteredOpportunities.length} affaires
                  </div>
                </div>
                <div className="filter-actions">
                  <button className="filter-button">
                    <svg width="16" height="16" viewBox="0 0 24 24">
                      <path
                        d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"
                        fill="currentColor"
                      />
                    </svg>
                    Tout le monde
                  </button>

                  <SearchField
                    value={state.searchTerm}
                    onSearch={handleSearchChange}
                    placeholder="Titre, contact, responsable..."
                  />
                </div>
              </div>

              {state.viewMode === "list" ? (
                <OpportunityList
                  opportunities={filteredOpportunities}
                  selectedOpportunities={state.selectedOpportunities}
                  onSelectOpportunity={handleOpportunitySelect}
                  onSelectAll={handleSelectAll}
                  phaseColors={phaseColors}
                />
              ) : (
                <OpportunityKanban
                  opportunitiesByPhase={opportunitiesByPhase}
                  phaseColors={phaseColors}
                  phaseTotals={Object.keys(opportunitiesByPhase).reduce(
                    (acc, phase) => {
                      acc[phase] = calculatePhaseTotal(phase);
                      return acc;
                    },
                    {} as Record<string, number>
                  )}
                />
              )}

              {state.selectedOpportunities.length > 0 &&
                state.viewMode === "list" && (
                  <div className="selection-actions">
                    <div className="selection-info">
                      {state.selectedOpportunities.length} élément(s)
                      sélectionné(s) •
                      <button className="deselect-button" onClick={deselectAll}>
                        tout désélectionner
                      </button>
                    </div>

                    <div className="selection-buttons">
                      <button
                        className="selection-action-button assign"
                        onClick={() => handleMassAction("assign")}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24">
                          <path
                            d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                            fill="currentColor"
                          />
                        </svg>
                        Me l'assigner
                      </button>

                      <button
                        className="selection-action-button lost"
                        onClick={() => handleMassAction("lost")}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24">
                          <path
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
                            fill="currentColor"
                          />
                        </svg>
                        Perdu
                      </button>

                      <button
                        className="selection-action-button won"
                        onClick={() => handleMassAction("won")}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24">
                          <path
                            d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                            fill="currentColor"
                          />
                        </svg>
                        Gagné
                      </button>

                      <button
                        className="selection-action-button move"
                        onClick={() => handleMassAction("move")}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24">
                          <path
                            d="M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z"
                            fill="currentColor"
                          />
                        </svg>
                        Déplacer vers
                      </button>

                      <button
                        className="selection-action-button delete"
                        onClick={() => handleMassAction("delete")}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24">
                          <path
                            d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
                            fill="currentColor"
                          />
                        </svg>
                        Supprimer
                      </button>
                    </div>
                  </div>
                )}
            </>
          )}
        </main>
      </div>

      {state.showCreateModal && (
        <CreateOpportunityModal
          onClose={closeCreateModal}
          onSave={handleCreateOpportunity}
        />
      )}
    </div>
  );
};

export default OpportunitiesView;
