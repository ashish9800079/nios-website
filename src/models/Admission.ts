import mongoose from 'mongoose';

const admissionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true,
  },
  personalInfo: {
    fullName: {
      type: String,
      required: [true, 'Please provide your full name'],
    },
    dateOfBirth: {
      type: Date,
      required: [true, 'Please provide your date of birth'],
    },
    gender: {
      type: String,
      enum: ['male', 'female', 'other'],
      required: [true, 'Please specify your gender'],
    },
    nationality: {
      type: String,
      required: [true, 'Please provide your nationality'],
    },
    address: {
      street: String,
      city: String,
      state: String,
      country: String,
      pincode: String,
    },
    contact: {
      phone: String,
      alternatePhone: String,
    },
  },
  academicInfo: {
    lastQualification: {
      type: String,
      required: [true, 'Please provide your last qualification'],
    },
    board: String,
    yearOfPassing: Number,
    percentage: Number,
    subjects: [String],
  },
  documents: [{
    type: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    verified: {
      type: Boolean,
      default: false,
    },
  }],
  payment: {
    amount: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ['pending', 'completed', 'failed'],
      default: 'pending',
    },
    transactionId: String,
    paymentDate: Date,
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected', 'completed'],
    default: 'pending',
  },
  remarks: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Update the updatedAt field before saving
admissionSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

export default mongoose.models.Admission || mongoose.model('Admission', admissionSchema); 