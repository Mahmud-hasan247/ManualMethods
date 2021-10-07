const fibonacci = (number) => {
    const series = [1, 1];
    while (series[series.length - 1] < number) {
      series.push(series[series.length - 1] + series[series.length - 2]);
    }
    return series;
  };
  
  console.log(fibonacci(10)); // expected: [1, 1, 2, 3, 5, 8, 13]