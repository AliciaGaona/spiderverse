const Spiderman = require("../app/spiderman");

describe("Test Suite Dummy Description", () => {
    test('Case 1 Dummy', () => {
      const resultOfSomething = 1 + 2
      expect(resultOfSomething).toBe(3);
    });
  })

  describe("Unit Test for Spiderman class", () => {
    test('1) Create an spiderman object', () => {
      //escribimos el código que queremos usar tal cuál
      //Quiero poder instanciar un objeto Spiderman con esta info
      const andrewGarfield= new Spiderman ("Spiderman Sony", 31, "Andrew Garfield",31,"Sony")

      //validamos que este código funcione de la forma esperada
      expect(andrewGarfield.nombre).toBe("Spiderman Sony")
      expect(andrewGarfield.edad).toBe(31)
      expect(andrewGarfield.actor).toBe("Andrew Garfield")
      expect(andrewGarfield.numeroPeliculas).toBe(31)
      expect(andrewGarfield.estudioCine).toBe("Sony")
    });
  })


