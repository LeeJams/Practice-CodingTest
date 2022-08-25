class Grape {
  constructor() {
    this.adjacencyList = {
      center: {
        relation: [],
        price: 0,
      },
    };
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = {
        relation: [],
        price: 0,
      };
    }
  }

  addEdge(v1, v2) {
    if (v2 === "-") v2 = "center";
    if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
      this.adjacencyList[v1].relation.push([v2, "p"]);
      this.adjacencyList[v2].relation.push([v1, "c"]);
    }
  }
  priceSet(vertex, price) {
    let idx = this.adjacencyList[vertex].relation.findIndex(
      (n) => n[1] === "p"
    );
    if (idx === -1) return;
    const parent = this.adjacencyList[vertex].relation[idx][0];
    const commission = Math.floor(price * 0.1);
    if (commission >= 1) {
      this.adjacencyList[vertex].price += price - commission;
      this.priceSet(parent, commission);
    } else {
      this.adjacencyList[vertex].price += price;
    }
  }
}

function solution(enroll, referral, seller, amount) {
  const gr = new Grape();
  enroll.forEach((n) => {
    gr.addVertex(n);
  });
  referral.forEach((n, idx) => {
    gr.addEdge(enroll[idx], n);
  });
  const result = [];
  seller.forEach((n, idx) => {
    const sum = amount[idx] * 100;
    gr.priceSet(n, sum);
  });

  enroll.forEach((n) => {
    result.push(gr.adjacencyList[n].price);
  });

  return result;
}

console.log(
  solution(
    ["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"],
    ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"],
    ["young", "john", "tod", "emily", "mary"],
    [12, 4, 2, 5, 10]
  )
);
