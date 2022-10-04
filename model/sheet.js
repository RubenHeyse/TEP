import mongoose from "mongoose";
const { Schema, model } = mongoose;

const topicSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required.']
  },
  creation: {
    date:  {
      type: Date,
      default: Date.now(),
    },
    user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    required: true
  },
  update: {
    date:  {
      type: Date,
      default: Date.now(),
    },
    user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    required: true
  },

  topics: [
    {
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Topic'
    }
  ],

  child_equations: [
    {
      equation_id: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Equation', 
        required: true
      },
      svg_reference: URL,
      date_added: {
        type: Date,
        default: Date.now(),
      },
      added_by: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: true
      },
      section: [String],
    },
  ],

  members: [
    {
      user_id: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: true
      },
      date_joined: {
        type: Date,
        default: Date.now(),
      },
      added_by: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: true
      },
      access_level: {
        type: String,
        enum: {
          values: ['viewer', 'editor'],
          message: '{VALUE} is not supported',
        },
        default: 'viewer'
      }
    }
  ]
});

const Topic = model("Topic", topicSchema);
export default Topic;