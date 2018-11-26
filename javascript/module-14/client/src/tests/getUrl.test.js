import Model  from '../js/model';

import axios from 'axios';

jest.mock('axios');

describe('Get url', () => {
  it('should get url', () => {

    const model = new Model();
    const response = {
      data: {
        id: 1,
        img: 'src.jpg',
        url: "http://github.com",
      },
    };
    const result = {
        id: 1,
        img: 'src.jpg',
        url: "http://github.com",
    }
    const url =  "http://github.com";

    axios.get.mockResolvedValue(response);

    return model.getUrl(url)
      .then(item => expect(item).toEqual(result))
      .catch(error => expect(error).not.toBeNull());
  });
});