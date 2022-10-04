import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required.']
  },
  created_at:  {
    type: Date,
    default: Date.now(),
  },
  updated_at:  {
    type: Date,
    default: Date.now(),
  },
  contact_details: [String],
  password_hash: String,
  avatar_uri: String,
  plan: {
    plan_id: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Plan'
    },
    date_joined:  {
      type: Date,
      default: Date.now(),
    }
  },
  last_active: {
    type: Date,
    default: Date.now(),
  },
  sheets: [
    {
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Sheet'
    }
  ]
})

const User = model("User", userSchema);
export default User;