// app/api/signup/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    // Validate email is provided
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' }, 
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

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({ 
      where: { email: email.toLowerCase().trim() } 
    });
    
    if (existingUser) {
      return NextResponse.json(
        { error: 'Email is already registered' }, 
        { status: 400 }
      );
    }

    // Create new user
    const newUser = await prisma.user.create({
      data: { 
        email: email.toLowerCase().trim() 
      },
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Successfully signed up! We\'ll be in touch soon.',
        data: { id: newUser.id, email: newUser.email }
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Error signing up user:', error);
    return NextResponse.json(
      { error: 'Failed to sign up. Please try again later.' }, 
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}