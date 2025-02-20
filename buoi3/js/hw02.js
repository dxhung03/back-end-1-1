const option = [
  {
    "id": 1,
    "name": "Phone",
    "parent": 0,
    "children": [
      {
        "id": 3,
        "name": "SamSung",
        "parent": 1,
        "children": [
          {
            "id": 7,
            "name": "A15",
            "parent": 3,
            "children": []
          },
          {
            "id": 8,
            "name": "A20",
            "parent": 3,
            "children": []
          }
        ]
      },
      {
        "id": 4,
        "name": "Iphone",
        "parent": 1,
        "children": [
          {
            "id": 9,
            "name": "Iphone X",
            "parent": 4,
            "children": []
          },
          {
            "id": 10,
            "name": "Iphone 15 ProMax",
            "parent": 4,
            "children": []
          }
        ]
      }
    ]
  },
  {
    "id": 2,
    "name": "Laptop",
    "parent": 0,
    "children": [
      {
        "id": 5,
        "name": "Dell",
        "parent": 2,
        "children": []
      },
      {
        "id": 6,
        "name": "Lenovo",
        "parent": 2,
        "children": []
      }
    ]
  }
];


const selectOption = function (optionData, level = "") {
  let newOption = "";
  for (let i = 0; i < optionData.length; i++) {
      newOption += `<option value="${optionData[i].id}">${level+'|'}${optionData[i].name}</option>`
      if(optionData[i].children){
        newOption += selectOption(optionData[i].children, level + "--");
      }
  }
  return newOption;                                                                                                                                          
};

document.getElementById("myOption").innerHTML = selectOption(option);