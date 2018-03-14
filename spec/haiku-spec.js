import { Poem } from './../src/haiku'

describe('Poem', function() {

 it('should test for user input', function() {
   var poem = new Poem("Hello");
   expect(poem.phrase).toEqual("Hello");
 });
});
