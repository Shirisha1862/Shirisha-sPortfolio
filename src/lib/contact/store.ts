/**
 * In-memory contact store implementation.
 * Implements ContactStore interface — swap this file for a DB-backed
 * implementation when ready (Supabase, Firebase, etc.) without touching
 * any UI component.
 */

import type { ContactMessage, ContactStore } from './types';

const messages: ContactMessage[] = [];

export const contactStore: ContactStore = {
  async save(data) {
    const message: ContactMessage = {
      id:        crypto.randomUUID(),
      name:      data.name,
      email:     data.email,
      message:   data.message,
      createdAt: new Date(),
    };
    messages.push(message);
    console.log('[ContactStore] Message saved:', message);
    return message;
  },

  async getAll() {
    return [...messages];
  },
};
