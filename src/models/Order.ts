import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  items: [{
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
    },
    price: {
      type: Number,
      required: true,
    },
  }],
  shippingAddress: {
    fullName: String,
    street: String,
    city: String,
    state: String,
    country: String,
    pincode: String,
    phone: String,
  },
  payment: {
    method: {
      type: String,
      enum: ['credit-card', 'debit-card', 'net-banking', 'upi'],
      required: true,
    },
    status: {
      type: String,
      enum: ['pending', 'completed', 'failed', 'refunded'],
      default: 'pending',
    },
    amount: {
      type: Number,
      required: true,
    },
    transactionId: String,
    paymentDate: Date,
  },
  status: {
    type: String,
    enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
    default: 'pending',
  },
  tracking: {
    number: String,
    carrier: String,
    url: String,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
  shippingCost: {
    type: Number,
    required: true,
  },
  tax: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    default: 0,
  },
  notes: String,
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
orderSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

// Calculate total amount before saving
orderSchema.pre('save', function(next) {
  const itemsTotal = this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  this.totalAmount = itemsTotal + this.shippingCost + this.tax - this.discount;
  next();
});

export default mongoose.models.Order || mongoose.model('Order', orderSchema); 