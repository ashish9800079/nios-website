import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import User from '@/models/User';
import Course from '@/models/Course';
import Admission from '@/models/Admission';
import Order from '@/models/Order';

export async function GET() {
  try {
    await dbConnect();

    // Fetch total counts
    const [totalUsers, totalCourses, totalAdmissions, totalOrders] = await Promise.all([
      User.countDocuments(),
      Course.countDocuments(),
      Admission.countDocuments(),
      Order.countDocuments(),
    ]);

    // Fetch recent admissions
    const recentAdmissions = await Admission.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .populate('course', 'title')
      .select('personalInfo.fullName status');

    // Fetch recent orders
    const recentOrders = await Order.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .select('_id totalAmount status');

    return NextResponse.json({
      totalUsers,
      totalCourses,
      totalAdmissions,
      totalOrders,
      recentAdmissions,
      recentOrders,
    });
  } catch (error) {
    console.error('Error fetching admin stats:', error);
    return NextResponse.json(
      { error: 'Failed to fetch admin statistics' },
      { status: 500 }
    );
  }
} 