import mongoose, { model, Schema, Types } from "mongoose";

const reviewSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    rating: Number,
    comment: String,
}, { timestamps: true });

const reviewModel = mongoose.models.Review || model('Review',reviewSchema)
export default reviewModel