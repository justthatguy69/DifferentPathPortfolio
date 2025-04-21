import { 
  users, type User, type InsertUser, 
  contactSubmissions, type ContactSubmission, type InsertContact 
} from "@shared/schema";

// Storage interface
export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactSubmission(submission: InsertContact): Promise<ContactSubmission>;
  getAllContactSubmissions(): Promise<ContactSubmission[]>;
  getContactSubmission(id: number): Promise<ContactSubmission | undefined>;
}

// In-memory storage implementation
export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactSubmissions: Map<number, ContactSubmission>;
  private userCurrentId: number;
  private contactCurrentId: number;

  constructor() {
    this.users = new Map();
    this.contactSubmissions = new Map();
    this.userCurrentId = 1;
    this.contactCurrentId = 1;
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Contact submission methods
  async createContactSubmission(submission: InsertContact): Promise<ContactSubmission> {
    const id = this.contactCurrentId++;
    const now = new Date();
    const contactSubmission: ContactSubmission = { 
      ...submission, 
      id, 
      createdAt: now 
    };
    this.contactSubmissions.set(id, contactSubmission);
    return contactSubmission;
  }

  async getAllContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values())
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async getContactSubmission(id: number): Promise<ContactSubmission | undefined> {
    return this.contactSubmissions.get(id);
  }
}

export const storage = new MemStorage();
