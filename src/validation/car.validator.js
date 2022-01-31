import Joi from "joi";

export const CarValidator=Joi.object({
    model:Joi.string().regex(new RegExp('^[a-zA-ZA-яїЇэЫъ]{1,20}$')).required().messages({
        'string.empty':'"model" не може бути пустим',
        'string.pattern.base':'тільки букви 1-20 символів'
    }),
    year:Joi.number().min(1900).max(new Date().getFullYear()).required().messages({
        'number.empty':'не може бути пустим',
        'number.base':'тільки 1900-2022 '

    }),
    price:Joi.number().min(0).max(100000).messages({
        'number.empty':'не може бути пустим',
        'number.base':'тільки цифри 1-1000000 '
    })
})