import { NextResponse } from 'next/server';
import { userAll } from '../../utils/database/models/allusers/userall';
import { studentAll } from '@/app/utils/database/models/student/studentAll';
import { connectDB } from '@/app/utils/database/connect';

export async function POST(request) {
  try {
    connectDB();

    const { userId, name, college, email } = await request.json();

    await userAll.create({
      userId,
      role: 'student',
    });

    await studentAll.create({
      userId,
      name,
      email,
      college,
      listings: [],
    });

    return NextResponse.json({
      message: 'User and student added successfully',
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      message: error.message,
      success: false,
    });
  }
}
