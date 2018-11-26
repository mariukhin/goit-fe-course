import Model  from '../js/model';

import axios from 'axios';

jest.mock('axios');

describe('Get all url', () => {
  it('should get all urls', () => {
    expect.assertions(1);

    const model = new Model();
    const response = {
      data:[
        { id: 1, img: "src.jpg", url: "http://github.com"},
        { id: 2, img: "sdsfsdf.jpg", url: "vk.com"},
        { id: 3, img: "ddsfdsf.jpg", url: "youtube.com"}
      ],
    };
    const result = [
        { id: 1, img: "src.jpg", url: "http://github.com"},
        { id: 2, img: "sdsfsdf.jpg", url: "vk.com"},
        { id: 3, img: "ddsfdsf.jpg", url: "youtube.com"}
    ];
    axios.get.mockResolvedValue(response);

    return model.fetchUrls()
      .then(items => expect(items).toEqual(expect.arrayContaining(result)))
      .catch(error => expect(error).not.toBeNull());
  });
});