import mongoose from "mongoose";
const { Schema, model } = mongoose;

const constantSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required.']
  },
  value: {
    type: Number,
    required: [true, 'Value is required.'],
    default: 0
  },
  submission: {
    submission_date:  {
      type: Date,
      default: Date.now(),
    },
    user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    organisation_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Organisation'},
    visability: {
      type: String,
      enum: {
        values: ['public', 'private'],
        message: '{VALUE} is not supported',
      },
      default: 'public',
      required: true
    },
    required: true
  },
  date_verified: {
    type: Date,
    default: Date.now(),
  },
  verification: [
    {
      user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
      decision: {
        type: String,
        enum: {
          values: ['accepted', 'rejected'],
          message: '{VALUE} is not supported',
        },
        default: 'accepted'
      },
      date: {
        type: Date,
        default: Date.now(),
      },
      notes: String,
    }
  ],
  status: {
    type: String,
    enum: {
      values: ['pending', 'accepted', 'rejected'],
      message: '{VALUE} is not supported',
    },
    default: 'pending',
    required: true
  },

  latex:{
    type: String,
    required: true
  },
  svg_reference: URL,
  standard_units: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Units',
    required: true
  }
});

const Constant = model("Constant", constantSchema);
export default Constant;