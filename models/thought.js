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
        thoughtText: {
            type: String, 
            required: true, 
            maxlength: 280,
            minlegnth: 1 
        },
        createdAt:{
            type: Date,
            default: Date.now, 
            get:  createdAtVal => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
        },
        username: {
            type: String, 
            require: true
        },
        reactions: {
            type: String, 
            required: true
        },
        reactions: [ReactionSchema]
       
    },
    {
        toJSON:{
            virtuals: true, 
            getters: true
        },
        id: false
    }
);

ThoughtSchema.virtual('reactionCount').get(function(){
    return this.reactions.length;
});


const Thought = model('Thought', ThoughtSchema);

module.exports = Thought; 