export class UserDto {
    constructor(user) {
        return {
            _id: user._id,
            name: user.name,
            email: user.email,
            level: user.level,
            xp: user.xp,
            rank: user.rank,
            activeShadows: user.activeShadows,
            strength: user.strength,
            agility: user.agility,
            mana: user.mana,
            dailyQuestsCompleted: user.dailyQuestsCompleted,
            role: user.role
            // shadowsUnlocked: user.shadowsUnlocked
        }
    }
}