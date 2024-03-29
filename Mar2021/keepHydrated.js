function litres(time) {
    const LITERS_PER_HOUR = 1 / 2;

    return Math.floor(time * LITERS_PER_HOUR);
  }
console.log(
    litres(2), //1, 'should return 1 litre');
    litres(1.4), //0, 'should return 0 litres');
    litres(12.3), //6, 'should return 6 litres');
    litres(0.82), //0, 'should return 0 litres');
    litres(11.8),// 5, 'should return 5 litres');
    litres(1787),// 893, 'should return 893 litres');
    litres(0),// 0, 'should return 0 litres');
)