const data = [
  {
    id: 1,
    name: "김수일",
    parents: null,
  },
  {
    id: 2,
    name: "김수이",
    parents: null,
  },
  {
    id: 3,
    name: "김수삼",
    parents: 1,
  },
  {
    id: 4,
    name: "김수사",
    parents: 1,
  },
  {
    id: 5,
    name: "김수오",
    parents: 2,
  },
  {
    id: 6,
    name: "김수육",
    parents: 5,
  },
  {
    id: 7,
    name: "김수칠",
    parents: 2,
  },
];
const processedData = []

data.forEach(item => {
  recursive(item, processedData);
})

const recursive = () => {
  
}