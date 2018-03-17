import joi from 'joi';
import forms from '../../database/mongodb/function/forms';

export default {
  description: 'This api will store the information of form',
  notes: "If successfull will return a successfull message with id's id",
  validate: {
    payload: {
      name: joi.string().required(),
      email: joi.string().required(),
    },
  },
  async handler(request, reply) {
    try {
      const { name, email } = request.payload;

      /*eslint-disable*/
      const res = await forms({ name, email });
      /* eslint-enable */

      return {
        statusCode: 200,
        message: 'Success',
      };
    } catch (error) {
      console.log(error);
      return {
        statusCode: 500,
        error: 'Server Error',
      };
    }
  },
};
