const data = [
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

// 순서가 보장 되지 않을 경우 문제가 발생함..
console.time("step1");
const dataList = [];

const recursive = (nodes, item) => {
  nodes.forEach(node => {
    if(node.id === item.parents) return node.children.push({...item, children: []});
    else recursive(node.children, item);
  })
}

data.forEach(item => {
  if(item.parents === null){
    dataList.push({...item, children: []});
  }else{
    recursive(dataList, item);
  }
})
console.timeEnd("step1");

/* -------------------- */
console.time("step2");
const dataList2 = data.filter(n => n.parents === null).map(n => ({...n, children: []}));
const items = data.filter(n => n.parents !== null);

const recursive2 = (nodes, item) => {
  nodes.forEach(node => {
    if(node.id === item.parents) node.children.push({...item, children: []});
    else recursive2(node.children, item);
  })
}

items.forEach(item => {
  recursive2(dataList2, item);
})
console.timeEnd("step2");