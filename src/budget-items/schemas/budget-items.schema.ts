const Joi = require('joi');

export const CreatedBudgetItemSchema = Joi.object({
    description: Joi.string()
        .min(3)
        .max(255)
        .required(),
    
    vendor: Joi.string()
        .min(3)
        .max(255)
        .required(),
    
    dueDate: Joi.date()
        .required(),
    
    paymentAmount: Joi.number()
        .required(),
    
    category: Joi.string()
        .min(3)
        .max(255)
        .required(),
    
    overDue: Joi.boolean()
})

export const UpdateBudgetItemSchema = Joi.object({
    description: Joi.string()
        .min(3)
        .max(255),
    
    vendor: Joi.string()
        .min(3)
        .max(255),
    
    dueDate: Joi.date(),
    
    paymentAmount: Joi.number(),
    
    category: Joi.string()
        .min(3)
        .max(255),

    overDue: Joi.boolean()
})