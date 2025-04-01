import { NextResponse } from 'next/server';
//import * as fs from 'fs/promises'; // No longer needed
//import path from 'path'; // No longer needed

//const EMAILS_FILE = path.join(process.cwd(), 'data', 'subscribers.json'); // No longer needed

// This file is kept as a placeholder but no longer used
// Subscriber management is now handled through PostHog surveys
export async function POST(req: Request) {
  return new Response(JSON.stringify({ message: "Endpoint deprecated" }), { 
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}