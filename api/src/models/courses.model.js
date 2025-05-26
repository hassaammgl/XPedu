import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    difficulty: {
        type: String,
        required: true,
    },
    lessons: {
        type:Number,
        default: 0,
    },
    totalXp: {
        type: Number,
        required: true,
    },
    
},{
    timestamps: true
})

const Course = mongoose.model('Course', courseSchema);
export default Course;

/**
 * 
 * courses (
  id: uuid (primary key)
  title: text
  description: text
  category: text (Frontend, Backend, Full Stack)
  difficulty: text (Beginner, Intermediate, Advanced)
  icon: text
  color: text
  lesson_count: integer
  total_xp: integer
  created_at: timestamp
)
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