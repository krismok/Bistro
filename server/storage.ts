import { 
  Waitlist, InsertWaitlist,
  Contact, InsertContact,
  Reservation, InsertReservation,
  timeSlots
} from "@shared/schema";

export interface IStorage {
  addToWaitlist(data: InsertWaitlist): Promise<Waitlist>;
  submitContact(data: InsertContact): Promise<Contact>;
  createReservation(data: InsertReservation): Promise<Reservation>;
  getReservations(date: Date): Promise<Reservation[]>;
  getAvailableTimeSlots(date: Date): Promise<typeof timeSlots[number][]>;
}

export class MemStorage implements IStorage {
  private waitlist: Map<number, Waitlist>;
  private contacts: Map<number, Contact>;
  private reservations: Map<number, Reservation>;
  private waitlistId: number;
  private contactId: number;
  private reservationId: number;
  private maxSeatsPerSlot: number = 20; // Configurable max seats per time slot

  constructor() {
    this.waitlist = new Map();
    this.contacts = new Map();
    this.reservations = new Map();
    this.waitlistId = 1;
    this.contactId = 1;
    this.reservationId = 1;
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

  async createReservation(data: InsertReservation): Promise<Reservation> {
    const id = this.reservationId++;
    const reservation: Reservation = {
      ...data,
      id,
      status: "confirmed",
      createdAt: new Date(),
    };
    this.reservations.set(id, reservation);
    return reservation;
  }

  async getReservations(date: Date): Promise<Reservation[]> {
    return Array.from(this.reservations.values()).filter(
      (res) => res.date.toDateString() === date.toDateString()
    );
  }

  async getAvailableTimeSlots(date: Date): Promise<typeof timeSlots[number][]> {
    const reservations = await this.getReservations(date);

    // Group reservations by time slot and calculate total pax
    const seatsBySlot = new Map<string, number>();
    reservations.forEach(res => {
      const timeStr = res.time.toString();
      seatsBySlot.set(timeStr, (seatsBySlot.get(timeStr) || 0) + res.pax);
    });

    // Filter available time slots
    return timeSlots.filter(slot => {
      const seatsBooked = seatsBySlot.get(slot) || 0;
      return seatsBooked < this.maxSeatsPerSlot;
    });
  }
}

export const storage = new MemStorage();