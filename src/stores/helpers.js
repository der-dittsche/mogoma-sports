import { defineStore } from "pinia";

export const useHelperStore = defineStore("helpersStore", {
  state: () => {
    return {
      currentSection: "home",
    };
  },
});
