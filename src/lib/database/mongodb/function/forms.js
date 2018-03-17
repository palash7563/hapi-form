// This file contain all the database function related to forms

import Forms from '../model/form';

/**
 * This database function stores the name and email of the form
 * @async
 * @param {String} user
 * @param {String} email
 * @returns {Promise}
 *
 * @example
 * formsData({ name: 'palash', email: 'palashg7563gmail.com' })
 * .then((e) => {
 * console.log(e);
 * })
 * .catch(() => {
 * console.log(e);
 * });
 */

export default async function formsData({ name, email }) {
  try {
    const form = new Forms({ name, email });

    const forms = await form.save();

    return {
      statusCode: 201,
      message: 'Success',
      payload: {
        formId: forms._id,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      error: 'Database Server Error',
    };
  }
}

// formsData({ name: 'palash', email: 'palashg7563@gmail.com' })
//   .then((e) => {
//     console.log(e);
//   })
//   .catch(() => {
//     console.log(e);
//   });
