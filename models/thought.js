const { Schema, model, Types } = require('mongoose');
const moment = require('moment');

//Schema only 
const ReactionSchema = new Schema(
    {
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },

    responseBody: {
        type: String, 
        required: true, 
        maxlength: 300, 
    },
    username: {
        type: String, 
        require: true, 
    },
    createdAt: {
        type: Date,
        default: Date.now, 
        get:  createdAtVal => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
    }
},
{
    toJSON: {
        getters: true
    }
}
);


const ThoughtSchema = new schema (
    {
        
    }
)
