const joi = require('joi')

const bookSchema = {
  title: joi.string().label('Title'),
  author: joi.string().label('Author'),
  image: joi.string().label('Image')
}

const bookOwnerSchema = {
  owner: joi.string().regex(/^[0-9a-fA-F]{24}$/, 'mongodb object-id').label('Owner')
}

const tradeSchema = {
  to: joi.string().regex(/^[0-9a-fA-F]{24}$/, 'mongodb object-id').label('To'),
  bookToGet: joi.string().regex(/^[0-9a-fA-F]{24}$/, 'mongodb object-id').label('Book To Get'),
  bookToGive: joi.string().regex(/^[0-9a-fA-F]{24}$/, 'mongodb object-id').label('Book To Give')
}
const tradeStatusSchema = {
  status: joi.string().valid('pending', 'accepted', 'declined').required().label('Trade Status')
}

const signUpSchema = {
  username: joi.string().min(5).max(255).required().label('Username'),
  password: joi.string().min(5).max(255).required().label('Password'),
  passwordConfirmation: joi.any().valid(joi.ref('password')).required().label('Confirmation Password').options({
    language: {
      any: {
        allowOnly: 'must match "Password"',
      }
    }
  }),
  city: joi.string().required().label('City'),
  st8: joi.string().required().label('State')
}

const signInSchema = {
  username: joi.string().min(5).max(255).required().label('Username'),
  password: joi.string().min(5).max(255).required().label('Password')
}

const updateUserInfoSchema = {
  username: joi.string().min(5).max(255).required().label('Username'),
  city: joi.string().required().label('City'),
  st8: joi.string().required().label('State')
}

const changePasswordSchema = {
  password: joi.string().min(5).max(255).required().label('Old Password'),
  newPassword: joi.string().min(5).max(255).required().label('New Password'),
  newPasswordConfirmation: joi.any().valid(joi.ref('newPassword')).required().label('New Confirmation Password ').options({
    language: {
      any: {
        allowOnly: 'must match "New Password"',
      }
    }
  })
}

const deleteMeSchema = {
  password: joi.string().min(5).max(255).required(),
  passwordConfirmation: joi.any().valid(joi.ref('Password')).required().label('Confirmation Password').options({
    language: {
      any: {
        allowOnly: 'must match "Password"',
      }
    }
  })
}

const searchTermSchema = {
  searchTerm: joi.string().min(1).max(50).required().label('Search Term')
}


module.exports = {
  bookSchema,
  bookOwnerSchema,
  tradeSchema,
  tradeStatusSchema,
  signInSchema,
  signUpSchema,
  updateUserInfoSchema,
  changePasswordSchema,
  deleteMeSchema,
  searchTermSchema
}
