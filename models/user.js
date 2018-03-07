var userSchema = {
    name: { type: String },
    username: { type: String, unique: true },
    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    profile_img: { type: String },
    fcm_tokens: [{deviceId: String, fcmId : String}],
    reset_password_token: { type: String },
    reset_password_expires: { type: Date },
    is_verified: {type: Boolean, default: false},
    is_password_set: {type: Boolean, default: false},
    is_paid: {type: Boolean, default: true}
}

module.exports = userSchema;