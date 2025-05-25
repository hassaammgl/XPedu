import mongoose from 'mongoose';
import argon2 from 'argon2';

const TEN_SHADOWS = [
  { name: "Igris", type: "Knight", strength: 85, obtainedAtLevel: 5 },
  { name: "Tusk", type: "Beast", strength: 70, obtainedAtLevel: 10 },
  { name: "Iron", type: "Golem", strength: 90, obtainedAtLevel: 15 },
  { name: "Beru", type: "Insectoid", strength: 95, obtainedAtLevel: 25 },
  { name: "Kaisel", type: "Dragon", strength: 88, obtainedAtLevel: 20 },
  { name: "Tank", type: "Juggernaut", strength: 92, obtainedAtLevel: 30 },
  { name: "Fang", type: "Assassin", strength: 80, obtainedAtLevel: 12 },
  { name: "Greed", type: "Mimic", strength: 75, obtainedAtLevel: 18 },
  { name: "Bellion", type: "General", strength: 99, obtainedAtLevel: 40 },
  { name: "Kamish", type: "Dragon Lord", strength: 100, obtainedAtLevel: 50 }
];

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false },
  refreshToken: { type: String, select: false },
  level: { type: Number, default: 1, min: 1, max: 100 },
  xp: { type: Number, default: 0 },
  rank: {
    type: String,
    enum: [
      'E', 'D', 'C',
      'B', 'A', 'S',
      'SS', 'SSS', 'Monarch',
      'Ruler'
    ],
    default: 'E'
  },
  shadowsUnlocked: [
    {
      name: { type: String, enum: TEN_SHADOWS.map(s => s.name) },
      obtainedAt: { type: Date, default: Date.now },
      isSummoned: { type: Boolean, default: false }
    }
  ],
  activeShadows: { type: Number, default: 0, max: 3 },
  strength: { type: Number, default: 10 },
  agility: { type: Number, default: 10 },
  mana: { type: Number, default: 100 },
  lastBattle: Date,
  dailyQuestsCompleted: { type: Number, default: 0 }
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  try {
    this.password = await argon2.hash(this.password);
    next();
  } catch (err) {
    next(err);
  }
});

userSchema.methods.verifyPassword = async function (candidatePassword) {
  return await argon2.verify(this.password, candidatePassword);
};

userSchema.methods.gainXP = function (amount) {
  this.xp += amount;
  const xpNeeded = this.level * 100;

  if (this.xp >= xpNeeded) {
    this.level += 1;
    this.xp -= xpNeeded;
    this.checkShadowUnlock();
    return { leveledUp: true, newLevel: this.level };
  }
  return { leveledUp: false };
};

userSchema.methods.checkShadowUnlock = function () {
  TEN_SHADOWS.forEach(shadow => {
    if (this.level >= shadow.obtainedAtLevel &&
      !this.shadowsUnlocked.some(s => s.name === shadow.name)) {
      this.shadowsUnlocked.push({
        name: shadow.name,
        obtainedAt: new Date()
      });
    }
  });
};

userSchema.methods.summonShadow = function (shadowName) {
  if (this.activeShadows >= 3) {
    throw new Error("You can only have 3 shadows active at once");
  }

  const shadow = this.shadowsUnlocked.find(s => s.name === shadowName);
  if (!shadow) throw new Error("Shadow not unlocked yet");

  shadow.isSummoned = true;
  this.activeShadows += 1;
  return shadow;
};

userSchema.methods.recallShadow = function (shadowName) {
  const shadow = this.shadowsUnlocked.find(s => s.name === shadowName);
  if (!shadow || !shadow.isSummoned) return false;

  shadow.isSummoned = false;
  this.activeShadows -= 1;
  return true;
};

userSchema.methods.completeDailyQuest = function () {
  const today = new Date().toDateString();
  if (this.lastBattle?.toDateString() === today) {
    return { success: false, message: "Already completed today's quest" };
  }

  this.dailyQuestsCompleted += 1;
  this.lastBattle = new Date();

  const xpReward = 50 + (this.dailyQuestsCompleted % 7) * 10;
  this.gainXP(xpReward);

  return { success: true, xpGained: xpReward };
};

const User = mongoose.model('User', userSchema);
export default User;