/**
 * Contact storage interface — abstracted so the implementation can be
 * swapped from in-memory to any real DB (Supabase, Firebase, etc.)
 * without touching the Contact form component at all.
 */

export interface ContactMessage {
  id:        string;
  name:      string;
  email:     string;
  message:   string;
  createdAt: Date;
}

export interface ContactStore {
  save(message: Omit<ContactMessage, 'id' | 'createdAt'>): Promise<ContactMessage>;
  getAll(): Promise<ContactMessage[]>;
}
