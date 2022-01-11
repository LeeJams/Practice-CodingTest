const result = require("./data.json");
// 순서가 보장 되지 않을 경우 문제가 발생함..
function firstWay() {
  const dataList = [];
  
  const recursive = (nodes, item) => {
    nodes.forEach((node) => {
      if (node.distSeqNo === item.parentDistSeqNo) {
        node.children.push({ ...item, children: [] });
      } else {
        recursive(node.children, item);
      }
    });
  };
  
  result.data.forEach((item) => {
    if (item.parentDistSeqNo == null) {
      dataList.push({
        ...item,
        children: [],
      });
    } else {
      recursive(dataList, item);
    }
  });
}

/* -------------------- */
// 순서 상관 없음
function secondWay() {
  const dataList2 = result.data
    .filter((n) => n.parentDistSeqNo === null)
    .map((n) => ({ ...n, children: [] }));
  const items = result.data.filter((n) => n.parentDistSeqNo !== null);
  
  const recursive2 = (nodes, item) => {
    nodes.forEach((node) => {
      if (node.distSeqNo === item.parentDistSeqNo)
        node.children.push({ ...item, children: [] });
      else recursive2(node.children, item);
    });
  };
  
  items.forEach((item) => {
    recursive2(dataList2, item);
  });
}

/* -------------------- */
const result2 = {
  data: [
    {
      "distSeqNo": 1,
      "distLevel": 1,
      "parentDistSeqNo": null,
    },
    {
      "distSeqNo": 2,
      "distLevel": 1,
      "parentDistSeqNo": null,
    },
    {
      "distSeqNo": 3,
      "distLevel": 1,
      "parentDistSeqNo": null,
    },
    {
      "distSeqNo": 4,
      "distLevel": 2,
      "parentDistSeqNo": 3,
    },
    {
      "distSeqNo": 5,
      "distLevel": 2,
      "parentDistSeqNo": 2,
    },
    {
      "distSeqNo": 6,
      "distLevel": 3,
      "parentDistSeqNo": 5,
    },
    {
      "distSeqNo": 7,
      "distLevel": 4,
      "parentDistSeqNo": 6,
    },
    {
      "distSeqNo": 8,
      "distLevel": 5,
      "parentDistSeqNo": 7,
    },
    {
      "distSeqNo": 9,
      "distLevel": 6,
      "parentDistSeqNo": 8,
    },
    {
      "distSeqNo": 10,
      "distLevel": 7,
      "parentDistSeqNo": 9,
    },
  ]
}
function thirdWay() {
  for (let i = result.data[result.data.length - 1].distLevel; i > 1; i--) {
    const data = result.data.filter((n) => n.distLevel === i);
    data.forEach((item) => {
      const idx = result.data.findIndex(
        (n) => n.distSeqNo === item.parentDistSeqNo
      );
      if(!result.data[idx].children) result.data[idx].children = [];
      result.data[idx].children.push(item);
    });
  }
}
/* function thirdWay() {
  for(let i = 7; i > 1; i--){
    const data = result2.data.filter(n => n.distLevel === i);
    data.forEach(item => {
      const idx = result2.data.findIndex(n => n.distSeqNo === item.parentDistSeqNo);
      result2.data[idx].children = [];
      result2.data[idx].children.push(item);
    })
  }
} */

function fourthWay() {
  const lastDistLevel = result.data[result.data.length - 1].distLevel;

  let baseData = result.data.filter((n) => n.distLevel === lastDistLevel);

  for (let i = lastDistLevel - 1; i > 0; i--) {
    const parentsData = result.data.filter((n) => n.distLevel === i);

    baseData.forEach((item) => {
      const idx = parentsData.findIndex(
        (n) => n.distSeqNo === item.parentDistSeqNo
      );
      parentsData[idx].hasChildren = true;
    });
    baseData = parentsData;
  }
}
function fifthWay() {
  for (let i = result.data[result.data.length - 1].distLevel; i > 1; i--) {
    const data = result.data.filter((n) => n.distLevel === i);
    data.forEach((item) => {
      const idx = result.data.findIndex(
        (n) => n.distSeqNo === item.parentDistSeqNo
      );
      result.data[idx].hasChildren = true;
    });
  }
}

console.time("test");
fourthWay();
console.timeEnd("test");
console.time("test");
fifthWay();
console.timeEnd("test");