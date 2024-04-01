function miniMaxSum(arr) {
    // Tạo mảng vector lưu giá trị lớn nhất và nhỏ nhất của mảng
    let vector = [-1, Number.MAX_SAFE_INTEGER];
    let sum = 0;
    //Tính tổng của mảng sau đó tìm giá trị 
    // min = sum - giá trị lớn nhất của mảng
    // max = sum - giá trị nhỏ nhất của mảng
    for (let i = 0; i < arr.length - 1; i++) {
      sum += arr[i];
      if (arr[i] > vector[0]) {
        vector[0] = arr[i];
      }
      if (arr[i] < vector[1]) {
        vector[1] = arr[i];
      }
    }
    console.log((sum - vector[0]) + " " + (sum - vector[1]));
  }
  