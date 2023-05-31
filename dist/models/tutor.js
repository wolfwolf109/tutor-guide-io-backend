"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const resultSchema = new mongoose_1.default.Schema({
    subject: { type: Schema.Types.ObjectId, required: true, ref: "Subject" },
    dseResult: { type: Number, required: true, min: 0, Max: 7 },
});
const TutorSchema = new Schema({
    status: { type: String, required: true, enum: ["available", "unavailable"] },
    gender: { type: String, required: true, enum: ["Male", "Female", "Other"] },
    first_name: { type: String },
    last_name: { type: String, required: true },
    tutorID: { type: Number, required: true },
    subject: [resultSchema],
    language: {
        type: String,
        required: true,
        enum: ["Cantonese", "English", "Mandarin"],
    },
    experience: { type: String, required: true },
    self_intro: { type: String, required: true },
    education_qualification: { type: String, required: true },
    time_available: { type: String, required: true },
    tuition_location: { type: String, required: true },
    min_salary: { type: Number, required: true },
    max_salary: { type: Number },
    cases: [{ type: Schema.Types.ObjectId, ref: "Case" }],
    //private field
    contact_number: { type: String, required: true, selected: false },
    media_channel: {
        type: String,
        required: true,
        enum: ["FB", "IG", "Goop", "Frd/Fam", "Google"],
    },
});
TutorSchema.virtual("url").get(function () {
    return `/tutor/${this._id}`;
});
module.exports = mongoose_1.default.model("Tutor", TutorSchema);
