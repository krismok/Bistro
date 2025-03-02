import { 
  Waitlist, InsertWaitlist,
  Contact, InsertContact 
} from "@shared/schema";

export interface IStorage {
  addToWaitlist(data: InsertWaitlist): Promise<Waitlist>;
  submitContact(data: InsertContact): Promise<Contact>;
}

export class MemStorage implements IStorage {
  private waitlist: Map<number, Waitlist>;
  private contacts: Map<number, Contact>;
  private waitlistId: number;
  private contactId: number;

  constructor() {
    this.waitlist = new Map();
    this.contacts = new Map();
    this.waitlistId = 1;
    this.contactId = 1;
  }

  async addToWaitlist(data: InsertWaitlist): Promise<Waitlist> {
    const id = this.waitlistId++;
    const entry: Waitlist = {
      ...data,
      id,
      createdAt: new Date(),
    };
    this.waitlist.set(id, entry);
    return entry;
  }

  async submitContact(data: InsertContact): Promise<Contact> {
    const id = this.contactId++;
    const entry: Contact = {
      ...data,
      id,
      createdAt: new Date(),
    };
    this.contacts.set(id, entry);
    return entry;
  }
}

export const storage = new MemStorage();
