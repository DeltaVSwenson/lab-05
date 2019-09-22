const Categories = require('../../models-modular/categories/categories.js');
let categories = new Categories();

const supergoose = require('../supergoose.js');

describe('Categories Model (Modular)', () => {

  // How will you handle both the happy path and edge cases in these tests?

  it('can create() a new category', async () => {
    let model = {name: 'joe', description: 'he is a joe'};
    let records = await categories.create(model);
    //console.log(records);
    expect(records).toHaveProperty('name', "joe");
  });

  it('can get() a category', async () => {
    let model = {name: 'joe', description: 'he is a joe'};
    let records = await categories.create(model);
    let gotcha = await categories.get(records._id);
    expect(gotcha.name).toEqual(records.name);
    expect(gotcha.name).toEqual(model.name);
  });

  it('can get() all categories', async () => {
    let records = await categories.get();
    expect(records.length).toEqual(2);
  });

  it('can update() a category', async () => {
    let model = {name: 'joe', description: 'he is a joe'};
    let records = await categories.create(model);
    let update = await categories.update(records._id, {name:'Jon', description:'he is a jon'});
    expect(update).toHaveProperty('name', 'Jon');
  });

  it('can delete() a category', async () => {
    let model = {name: 'joe', description: 'he is a joe'};
    let records = await categories.create(model);
    let delteRecord = await categories.delete(records);
    let gotcha = await categories.get(records._id);

    expect(gotcha).toBe(null);
    expect(delteRecord.deletedCount).toBe(1);


  });

});