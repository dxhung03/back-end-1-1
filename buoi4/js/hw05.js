let fullNames = ['Nguyễn Đình Văn', 'Tạ Hoàng An', 'Tô Anh Dũng', 'Nguyễn Văn Anh'];

const sortIncrease = function(arr){
  for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - 1 - i; j++) {
        let position = arr[j].lastIndexOf(' ');
        let position1 = arr[j + 1].lastIndexOf(' ');
        let name = arr[j].substring(position + 1); 
        let name1 = arr[j + 1].substring(position1 + 1);
        if (name > name1 || name === name1 ) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
      }
  }
  return arr;
}

console.log(sortIncrease(fullNames));