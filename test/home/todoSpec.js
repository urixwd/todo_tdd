describe('Todo controller tests', function(){
    var a = 1,
        b = 1,
        c = 2;
    it('"a should be equal to b"', function(){
        expect(a).toBe(b);
    });
    it('"a should be equal to c?"', function(){
        expect(a).toBe(c);
    });
});
