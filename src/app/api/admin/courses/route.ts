import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Course from '@/models/Course';

export async function GET() {
  try {
    await dbConnect();
    const courses = await Course.find();
    return NextResponse.json(courses);
  } catch (error) {
    console.error('Error fetching courses:', error);
    return NextResponse.json(
      { error: 'Failed to fetch courses' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const { title, description, level, duration, fee, subjects, studyMaterials } = await request.json();

    if (!title || !description || !level || !duration || !fee) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    await dbConnect();

    // Create new course
    const course = await Course.create({
      title,
      description,
      level,
      duration,
      fee,
      subjects: subjects || [],
      studyMaterials: studyMaterials || [],
      isActive: true,
    });

    return NextResponse.json(course, { status: 201 });
  } catch (error) {
    console.error('Error creating course:', error);
    return NextResponse.json(
      { error: 'Failed to create course' },
      { status: 500 }
    );
  }
} 