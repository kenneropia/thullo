const Joi = require('joi');
const { objectId } = require('./utils/JoiObjectId');

exports.addTaskSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  owner: objectId().required(),
  organisation: objectId().required(),
  board: objectId().required(),
  label: objectId(),
});

exports.updateTaskSchema = Joi.object({
  title: Joi.string(),
  description: Joi.string(),
  label: objectId(),

  organisation: objectId().required(),
});
