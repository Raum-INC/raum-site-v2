import { create } from "zustand";

type DownloadTab = "guests" | "hosts";

interface DownloadStore {
  download: DownloadTab;
  toggleGuest: () => void;
  toggleHosts: () => void;
}

const useDownloadStore = create<DownloadStore>((set) => ({
  download: "guests",
  toggleGuest: () => set({ download: "guests" }),
  toggleHosts: () => set({ download: "hosts" }),
}));

export default useDownloadStore;
