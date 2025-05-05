import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a course title'],
    maxlength: [100, 'Title cannot be more than 100 characters'],
  },
  description: {
    type: String,
    required: [true, 'Please provide a course description'],
  },
  level: {
    type: String,
    enum: ['secondary', 'senior-secondary', 'vocational'],
    required: [true, 'Please specify the course level'],
  },
  duration: {
    type: String,
    required: [true, 'Please specify the course duration'],
  },
  fee: {
    type: Number,
    required: [true, 'Please specify the course fee'],
  },
  subjects: [{
    name: String,
    code: String,
    description: String,
  }],
  studyMaterials: [{
    title: String,
    description: String,
    fileUrl: String,
    fileType: String,
  }],
  isActive: {
    type: Boolean,
    default: true,
  },
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
courseSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

export default mongoose.models.Course || mongoose.model('Course', courseSchema); 