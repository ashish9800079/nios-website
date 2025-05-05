import mongoose from 'mongoose';

const announcementSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title'],
    maxlength: [100, 'Title cannot be more than 100 characters'],
  },
  content: {
    type: String,
    required: [true, 'Please provide content'],
  },
  type: {
    type: String,
    enum: ['admission', 'exam', 'result', 'general'],
    required: [true, 'Please specify the announcement type'],
  },
  priority: {
    type: String,
    enum: ['high', 'medium', 'low'],
    default: 'medium',
  },
  startDate: {
    type: Date,
    required: [true, 'Please specify the start date'],
  },
  endDate: {
    type: Date,
    required: [true, 'Please specify the end date'],
  },
  attachments: [{
    name: String,
    url: String,
    type: String,
  }],
  isActive: {
    type: Boolean,
    default: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
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
announcementSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

// Validate end date is after start date
announcementSchema.pre('save', function(next) {
  if (this.endDate <= this.startDate) {
    throw new Error('End date must be after start date');
  }
  next();
});

export default mongoose.models.Announcement || mongoose.model('Announcement', announcementSchema); 