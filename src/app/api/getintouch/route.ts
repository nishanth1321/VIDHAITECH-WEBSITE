// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' }, 
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' }, 
        { status: 400 }
      );
    }

    // Create new message in database
    const newMessage = await prisma.message.create({
      data: {
        name,
        email,
        message,
      },
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Your message has been sent successfully!',
        data: newMessage 
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Error saving contact message:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' }, 
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}