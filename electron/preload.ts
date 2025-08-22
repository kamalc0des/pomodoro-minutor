import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electronAPI", {
  navigate: (path: string) => ipcRenderer.send("navigate", path),
});
