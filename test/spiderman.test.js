const Spiderman = require("../app/spiderman");

describe("Test Suite Dummy Description", () => {
    test('Case 1 Dummy', () => {
      const resultOfSomething = 1 + 2
      expect(resultOfSomething).toBe(3);
    });
  })

  describe("Unit Test for Spiderman class", () => {
    test('1) Create an spiderman object', () => {
      const andrewGarfield= new Spiderman ("Spiderman Sony", 31, "Andrew Garfield",31,"Sony")
      expect(andrewGarfield.nombre).toBe("Spiderman Sony")
      expect(andrewGarfield.edad).toBe(31)
      expect(andrewGarfield.actor).toBe("Andrew Garfield")
      expect(andrewGarfield.numeroPeliculas).toBe(31)
      expect(andrewGarfield.estudioCine).toBe("Sony")
    });
  })

   test('1) Use the method getInfo()', ()=>{
    const tomHolland = new Spiderman("Spiderman Marvel",25,"Tom Holland",5,"Marvel")
    expect(tomHolland.getInfo()).toBe("Hey, I´m Tom Holland from Marvel studio")
    console.log(tomHolland.getInfo())
   });


  
