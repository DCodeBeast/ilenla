const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema(
  {
    id: { type: String, default: null },
    title: { type: String, default: null },
    description: { type: String, default: null },
    price: { type: Number, default: null },
    location: { type: String, default: null },
    features: { type: [Object], default: [] },
    address: { type: String, default: null },
    files: { type: [Object], default: null },
    rooms: { type: String, default: '-' },
    listing: { type: String, default: null },
    type: { type: String, default: null },
    plot: { type: String, default: '-' },
    inviteOffers: { type: Boolean, default: false },
    status: { type: String, default: null },
    assignedRealtor: { type: [Object] },
    percentageCut: { type: Number, default: null },
    verifiedOwner: { type: [Object] },
    viewerCount: { type: [Object] },
    favoriteCount: { type: [Object] },
    currency: { type: [String] },
    amenities: { type: [String] },
    createdAt: {type:Date, default:Date.now()},
    startDate: { type: Date, default: null },
    endDate: { type: Date,default: null },
    ownerHistory: { type: [Object] },
    saleHistory: { type: [Object] },
    offerHistory: { type: [Object] },
  },
  { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);

module.exports = mongoose.model("property", propertySchema);
