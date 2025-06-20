import mongoose from 'mongoose';

const testSchema = new mongoose.Schema({
    courseId: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    orderIndex: {
        type: String,
        required: true,
    },
    xpReward: {
        type: Number,
        required: true,
    },

})

const Test = mongoose.model('Test', testSchema);
export default Test;

/**
 * 
lessons (
  id: uuid (primary key)
  course_id: uuid (foreign key -> courses.id)
  title: text
  content: text
  order_index: integer
  xp_reward: integer
  estimated_duration: text
  created_at: timestamp
) 
 */