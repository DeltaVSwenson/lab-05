const Products = require('../../models-singular/products');
let products = new Products();

const supergoose = require('../supergoose.js');

describe('Products Model (Singular)', () => {

  // How will you handle both the happy path and edge cases in these tests?

  it('can create() a new product', async () => {
    let model = {name: 'joe', description: 'he is a joe', price:6};
    let records = await products.create(model);
    //console.log(records);
    expect(records).toHaveProperty('name', 'joe');
  });

  it('can get() a product', async () => {
    let model = {name: 'joe', description: 'he is a joe', price:8};
    let records = await products.create(model);
    let gotcha = await products.get(records._id);
    expect(gotcha.name).toEqual(records.name);
    expect(gotcha.name).toEqual(model.name);
  });

  it('can get() all products', async () => {
    let records = await products.get();
    expect(records.length).toEqual(2);
  });

  it('can update() a product', async () => {
    let model = {name: 'joe', description: 'he is a joe', price:4};
    let records = await products.create(model);
    let update = await products.update(records._id, {name:'Jon', description:'he is a jon', price: 1});
    expect(update).toHaveProperty('name', 'Jon');
  });

  it('can delete() a product', async () => {
    let model = {name: 'joe', description: 'he is a joe', price: 2};
    let records = await products.create(model);
    let delteRecord = await products.delete(records);
    let gotcha = await products.get(records._id);

    expect(gotcha).toBe(null);
    expect(delteRecord.deletedCount).toBe(1);


  });

});