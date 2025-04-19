// lib/models/user.js
import { v4 as uuidv4 } from 'uuid';

export default class User {
  constructor({
    user_id = uuidv4(),
    name,
    email,
    role = 'Learner',
    wallet_balance = 0,
    joined_at = new Date()
  }) {
    this.user_id = user_id;
    this.name = name;
    this.email = email;
    this.role = role;
    this.wallet_balance = wallet_balance;
    this.joined_at = joined_at;
  }

  // Validate user data
  static validate(userData) {
    const errors = [];
    
    if (!userData.name) errors.push('Name is required');
    if (!userData.email) errors.push('Email is required');
    if (!['Learner', 'Instructor', 'Admin'].includes(userData.role)) {
      errors.push('Role must be Learner, Instructor, or Admin');
    }
    
    return errors;
  }
}