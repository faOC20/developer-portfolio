import { create } from "zustand";

export const useProjectStore = create((set)=>({
    projectSuggestions: [],
    setProjectSuggestions: (suggestions)=>set({projectSuggestions: suggestions})
}))