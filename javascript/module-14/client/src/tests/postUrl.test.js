import Model  from '../js/model';

import axios from 'axios';

jest.mock('axios');

describe('Post url', () => {
  it('should post url', () => {
    expect.assertions(1);

    const model = new Model();
    const response = {
      data: {
        id: 1,
        img: 'src.jpg',
        url: "http://github.com",
      },
    };
    const item = {
        id: 1,
        img: 'src.jpg',
        url: "http://github.com",
    };

    axios.post.mockResolvedValue(response);

    return model.postUrl(item)
      .then(item => expect(response).toEqual(item))
      .catch(error => expect(error).not.toBeNull());
  });
});