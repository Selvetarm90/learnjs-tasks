it("Возводит x в степень n", function() {
  let x = 5;

  let result = x;
  assert.equal(pow(x, 1), result);

  result *= x;
  assert.equal(pow(x, 2), result);

  result *= x;
  assert.equal(pow(x, 3), result);
});

// Если произойдет ошибка, то не ясно в каком из 3-х блоков она произошла

describe("возводит x в степень n", function() {
  it("5 в 1 степени будет 5", function() {
    assert.equal(pow(5, 1), 5);
  });

  it("5 во 2 степени будет 25", function() {
    assert.equal(pow(5, 2), 25);
  });

  it("5 в 3 степени будет 125", function() {
    assert.equal(pow(5, 3), 125);
  });
});
