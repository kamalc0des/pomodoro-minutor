export function byId<T extends HTMLElement>(id: string): T | null {
    return document.getElementById(id) as T | null;
  }
  
  export function setText(id: string, text: string) {
    const el = byId<HTMLElement>(id);
    if (el) el.textContent = text;
  }
  