
import { NextResponse } from 'next/server';
import * as fs from 'fs/promises';
import path from 'path';

const EMAILS_FILE = path.join(process.cwd(), 'data', 'subscribers.json');

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    
    let subscribers: string[] = [];
    try {
      const data = await fs.readFile(EMAILS_FILE, 'utf-8');
      subscribers = JSON.parse(data);
    } catch {
      await fs.mkdir(path.dirname(EMAILS_FILE), { recursive: true });
    }
    
    if (!subscribers.includes(email)) {
      subscribers.push(email);
      await fs.writeFile(EMAILS_FILE, JSON.stringify(subscribers, null, 2));
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 });
  }
}
