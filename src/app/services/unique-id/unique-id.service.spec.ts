import { UniqueIdService } from "./unique-id.service";

describe(UniqueIdService.name, () => {

    let service: UniqueIdService;
    beforeEach(() => {
        service = new UniqueIdService();
    })

    it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
    should generete id when called with prefix`, () => {
       const id = service.generateUniqueIdWithPrefix('app');
       expect(id.startsWith('app-')).toBeTrue();
    });

    it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
    should not generete duplicate IDs when called multiple times`, () => {
      const ids = new Set();

      for(let i = 0; i < 50; i++){
        ids.add(service.generateUniqueIdWithPrefix('app'))
      }
      expect(ids.size).toBe(50);
    })

    it(`#${UniqueIdService.prototype.getNumbersOfGeneratedUniqueIds.name}
    should return the number of generetedIds when called`, () => {
        service.generateUniqueIdWithPrefix('app')
        service.generateUniqueIdWithPrefix('app')
        expect(service.getNumbersOfGeneratedUniqueIds()).toBe(2);
    })

    it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should throw when called with empty prefix`, () => {
        const emptyValues = [null, undefined, '', '0', '1'];

        emptyValues.forEach(emptyValue => {
          expect(() => service.generateUniqueIdWithPrefix(emptyValue))
          .withContext(`Empty value: ${emptyValue}`)
          .toThrow();
        })
    })
})
