import  Model  from '../js/model';

describe('findUrl function', () => {
  const arr = [
      { id: 1, img: "src.jpg", url: "http://github.com"},
      { id: 2, img: "sdsfsdf.jpg", url: "vk.com"},
      { id: 3, img: "ddsfdsf.jpg", url: "youtube.com"}];
  it('Should find url in arr', () => {
    const model = new Model();
    expect(model.findUrl(arr, "vk.com")).toEqual({ id: 2, img: "sdsfsdf.jpg", url: "vk.com"});
  });
});