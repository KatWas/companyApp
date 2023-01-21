const expect = require('chai').expect;
const Department = require('../department.model.js');
const mongoose = require('mongoose');


const departmentSchema = new mongoose.Schema({
  name: { type: String, required: true }
});
describe('Department', () => {

    it('should throw an error if no "name" arg', () => {
        const dep = new Department({}); // create new Department, but don't set `name` attr value
      
        dep.validate(err => {
          expect(err.errors.name).to.exist;
        });
      
      });
    });

module.exports = mongoose.model('Department', departmentSchema);