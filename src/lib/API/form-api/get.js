import Path from 'path';

export default {
  description: 'this api will the form',
  notes: 'If successfull will route to post.js',
  async handler(request, h) {
    try {
      return h.file(Path.join('src/client/form.html'));
    } catch (error) {
      console.log(error);
      return {
        statusCode: 500,
        error: 'Server Error',
      };
    }
  },
};
