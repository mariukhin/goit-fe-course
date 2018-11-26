import Model  from '../js/model';

import axios from 'axios';

jest.mock('axios');

describe('Remove url', () => {
  it('should remove url', () => {
    expect.assertions(1);

    const model = new Model();
    const response = {
      data: {
        id: 1,
        img: 'src.jpg',
        url: "http://github.com",
      },
    };
    const responseGet = {
        data:[
          { id: 1, img: "src.jpg", url: "http://github.com"},
          { id: 2, img: "sdsfsdf.jpg", url: "vk.com"},
          { id: 3, img: "ddsfdsf.jpg", url: "youtube.com"}
        ],
      };
    const item = {
        id: 1,
        img: 'src.jpg',
        url: "http://github.com",
    };
    axios.get.mockResolvedValue(responseGet);
    axios.delete.mockResolvedValue(response);

    return model.removeItem(item)
      .then(item => expect(response).toEqual(item))
      .catch(error => expect(error).not.toBeNull());
  });
});