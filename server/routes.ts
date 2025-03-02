import type { Express } from "express";
import { createServer } from "http";
import { storage } from "./storage";
import { insertWaitlistSchema, insertContactSchema, insertReservationSchema } from "@shared/schema";

export async function registerRoutes(app: Express) {
  app.post("/api/waitlist", async (req, res) => {
    try {
      const data = insertWaitlistSchema.parse(req.body);
      const result = await storage.addToWaitlist(data);
      res.json(result);
    } catch (error) {
      res.status(400).json({ error: "Invalid request data" });
    }
  });

  app.post("/api/contact", async (req, res) => {
    try {
      const data = insertContactSchema.parse(req.body);
      const result = await storage.submitContact(data);
      res.json(result);
    } catch (error) {
      res.status(400).json({ error: "Invalid request data" });
    }
  });

  app.get("/api/reservations/available-slots", async (req, res) => {
    try {
      const date = new Date(req.query.date as string);
      if (isNaN(date.getTime())) {
        throw new Error("Invalid date");
      }
      const slots = await storage.getAvailableTimeSlots(date);
      res.json(slots);
    } catch (error) {
      res.status(400).json({ error: "Invalid request" });
    }
  });

  app.post("/api/reservations", async (req, res) => {
    try {
      const data = insertReservationSchema.parse(req.body);
      const result = await storage.createReservation(data);
      res.json(result);
    } catch (error) {
      res.status(400).json({ error: "Invalid request data" });
    }
  });

  return createServer(app);
}