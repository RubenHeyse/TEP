import mongoose from "mongoose";
const { Schema, model } = mongoose;

const equationSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required.']
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
  symbols: {
    type: [
      {
        symbol_id: {
          type: mongoose.Schema.Types.ObjectId, 
          ref: 'Symbol'
        }
      },
    ],
    unique: true,
    validate: [notEmpty, 'Symbols are required.'],
  },
  constants: {
    type: [
      {
        constant_id: {
          type: mongoose.Schema.Types.ObjectId, 
          ref: 'Constant'
        }
      },
    ],
    unique: true,
    validate: [notEmpty, 'Constants are required.'],
  },
  functions: {
    type: [
      {
        function_id: {
          type: mongoose.Schema.Types.ObjectId, 
          ref: 'Function'
        }
      },
    ],
    unique: true,
    validate: [notEmpty, 'Functions are required.'],
  },

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

const Equation = model("Equation", equationSchema);
export default Equation;