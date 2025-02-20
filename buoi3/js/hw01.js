const option = [{
    id: 1,
    name: "Phone",
    parent: 0
  },
  {
    id: 2,
    name: "Laptop",
    parent: 0
  },
  {
    id: 3,
    name: "SamSung",
    parent: 1
  },
  {
    id: 4,
    name: "Iphone",
    parent: 1
  },
  {
    id: 5,
    name: "Dell",
    parent: 2
  },
  {
    id: 6,
    name: "Lenovo",
    parent: 2
  },
  {
    id: 7,
    name: "A15",
    parent: 3
  },
  {
    id: 8,
    name: "A20",
    parent: 3
  },
  {
    id: 9,
    name: "Iphone X",
    parent: 4
  },
  {
    id: 10,
    name: "Iphone 15 ProMax",
    parent: 4
  },
];

const selectOption = function (optionData, parentId = 0, level = "") {
  let newOption = "";

  for (let i = 0; i < optionData.length; i++) {
    if (optionData[i].parent === parentId) {
      // newArr[newArr.length] = optionData[i];
      // console.log(optionData[i])
      newOption += `<option value="${optionData[i].id}">${level+'|'}${optionData[i].name}</option>`
      newOption += selectOption(optionData, optionData[i].id, level + "--");
      
    }
  }
  return newOption;
};

document.getElementById("myOption").innerHTML = selectOption(option);