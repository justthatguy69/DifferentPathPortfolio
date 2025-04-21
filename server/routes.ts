import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate request body
      const validatedData = insertContactSchema.parse(req.body);
      
      // Store in database
      const result = await storage.createContactSubmission(validatedData);
      
      // Return success
      res.status(201).json({
        message: "Contact form submitted successfully",
        id: result.id
      });
    } catch (error) {
      if (error instanceof Error) {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          message: "Validation error", 
          errors: validationError.details
        });
      } else {
        console.error("Unexpected error:", error);
        res.status(500).json({ 
          message: "An unexpected error occurred" 
        });
      }
    }
  });

  // Get all contact submissions (for admin purposes)
  app.get("/api/contact", async (req: Request, res: Response) => {
    try {
      const submissions = await storage.getAllContactSubmissions();
      res.status(200).json(submissions);
    } catch (error) {
      console.error("Error fetching contact submissions:", error);
      res.status(500).json({ 
        message: "Failed to fetch contact submissions" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
