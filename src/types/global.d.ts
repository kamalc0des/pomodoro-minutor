export {};

declare global {
  interface ElectronAPI {
    navigate: (path: string) => void;
  }

  interface Window {
    electronAPI: ElectronAPI;
    _electronApiDeclared?: boolean;
  }
}
