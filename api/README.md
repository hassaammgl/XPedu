# api

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.2.13. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

models

courses (
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

user_progress (
  id: uuid (primary key)
  user_id: uuid (foreign key -> users.id)
  course_id: uuid (foreign key -> courses.id)
  lesson_id: uuid (foreign key -> lessons.id)
  completed: boolean (default false)
  completion_date: timestamp
  score: integer
)

quests (
  id: uuid (primary key)
  title: text
  description: text
  difficulty: text
  type: text (Challenge, Project)
  xp_reward: integer
  badge_reward: text
  deadline: timestamp
  is_active: boolean (default true)
  created_at: timestamp
)


user_quests (
  id: uuid (primary key)
  user_id: uuid (foreign key -> users.id)
  quest_id: uuid (foreign key -> quests.id)
  status: text (not_started, in_progress, completed)
  started_at: timestamp
  completed_at: timestamp
)

badges (
  id: uuid (primary key)
  name: text (unique)
  description: text
  icon: text
  color: text
  category: text
  requirements: jsonb
  created_at: timestamp
)

user_badges (
  id: uuid (primary key)
  user_id: uuid (foreign key -> users.id)
  badge_id: uuid (foreign key -> badges.id)
  earned_at: timestamp
)


coding_challenges (
  id: uuid (primary key)
  title: text
  description: text
  difficulty: text
  language: text
  initial_code: text
  solution_code: text
  test_cases: jsonb
  xp_reward: integer
  time_limit: integer (in minutes)
  created_at: timestamp
)


challenge_submissions (
  id: uuid (primary key)
  user_id: uuid (foreign key -> users.id)
  challenge_id: uuid (foreign key -> coding_challenges.id)
  submitted_code: text
  passed_tests: integer
  total_tests: integer
  completion_time: integer (in seconds)
  submitted_at: timestamp
)

leaderboard (
  user_id: uuid
  username: text
  avatar_url: text
  level: integer
  total_xp: integer
  badge_count: integer
  rank: integer
)

test_statistics (
  id: uuid (primary key)
  test_id: uuid (foreign key -> tests.id)
  total_attempts: integer (default 0)
  successful_completions: integer (default 0)
  average_score: decimal
  average_completion_time: integer (in minutes)
  difficulty_rating: decimal
  updated_at: timestamp
)

user_test_progress (
  id: uuid (primary key)
  user_id: uuid (foreign key -> users.id)
  test_id: uuid (foreign key -> tests.id)
  category_id: uuid (foreign key -> test_categories.id)
  status: text (not_started, in_progress, completed, failed)
  best_score: decimal
  attempts: integer (default 0)
  first_completed_at: timestamp
  last_attempt_at: timestamp
  total_time_spent: integer (in minutes)
)

test_results (
  id: uuid (primary key)
  submission_id: uuid (foreign key -> test_submissions.id)
  test_case_id: uuid (foreign key -> test_cases.id)
  passed: boolean
  actual_output: text
  error_message: text
  execution_time: integer (in milliseconds)
  created_at: timestamp
)

test_submissions (
  id: uuid (primary key)
  user_id: uuid (foreign key -> users.id)
  test_id: uuid (foreign key -> tests.id)
  submitted_code: text
  status: text (pending, running, completed, failed)
  passed_tests: integer
  total_tests: integer
  score: decimal
  execution_time: integer (in milliseconds)
  memory_used: integer (in bytes)
  submitted_at: timestamp
  completed_at: timestamp
)

test_cases (
  id: uuid (primary key)
  test_id: uuid (foreign key -> tests.id)
  input: text
  expected_output: text
  description: text
  is_hidden: boolean (default false)
  order_index: integer
  weight: integer (default 1)
  created_at: timestamp
)

tests (
  id: uuid (primary key)
  category_id: uuid (foreign key -> test_categories.id)
  title: text
  description: text
  difficulty: text (Easy, Medium, Hard)
  language: text (html, css, javascript, etc.)
  time_limit: integer (in minutes)
  xp_reward: integer
  initial_code: text
  solution_code: text
  instructions: text
  hints: jsonb
  order_index: integer
  is_published: boolean (default false)
  created_at: timestamp
  updated_at: timestamp
)

test_categories (
  id: uuid (primary key)
  name: text (HTML, CSS, JavaScript, React, etc.)
  description: text
  icon: text
  color: text
  order_index: integer
  is_active: boolean (default true)
  created_at: timestamp
)
