import mongoose from "mongoose";
const { Schema, model } = mongoose;

const topicSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required.']
  },
  creation: {
    creation_date:  {
      type: Date,
      default: Date.now(),
    },
    user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    required: true
  },

  child_topics: [
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
      }
    }
  ],
  child_symbols: [
    {
      symbol_id: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Symbol',
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
      }
    }
  ],
  child_constants: [
    {
      constant_id: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Constant',
        required: true
      },
      date_added: {
        type: Date,
        default: Date.now(),
      },
      added_by: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: true
      },
      svg_reference: URL,
      value: Number,
    }
  ],
  child_functions: [
    {
      function_id: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Function',
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
      }
    }
  ],

  parent: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Topic'
  }
});

const Topic = model("Topic", topicSchema);
export default Topic;