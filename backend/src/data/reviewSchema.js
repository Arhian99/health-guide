import mongoose from "mongoose";


const ReviewSchema = new mongoose.Schema({
    DoctorName: String,
    Rating: String,
    Comment: String
})

const ReviewModel = mongoose.model('Review', ReviewSchema, 'Reviews');
export default ReviewModel;