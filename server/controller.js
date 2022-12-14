const items = require("./data.json");

let globalId = 4;

module.exports = {
  getItems: (req, res) => res.status(200).send(items),
  deleteItem: (req, res) => {
    let index = item.findIndex((elem) => elem.id === +req.params.id);
    item.splice(index, 1);
    res.status(200).send(item);
  },

  createJob: (req, res) => {
    let { jobname, jobnumber, partnumber, partsection, duedate } = req.body;
    let newJob = {
      id: globalId,
      jobname,
      jobnumber,
      partnumber,
      partsection,
      duedate,
    };
    jobs.push(newJob);
    res.status(200).send(jobs);
    globalId++;
    console.log(req.body);
  },

  // updateHouse: (req, res) => {
  //   let { id } = req.params;
  //   let { type } = req.body;
  //   let index = houses.findIndex((elem) => +elem.id === +id);

  //   if (houses[index].price <= 10000 && type === "minus") {
  //     houses[index].price = 0;
  //     res.status(200).send(houses);
  //   } else if (type === "plus") {
  //     houses[index].price += 10000;
  //     res.status(200).send(houses);
  //   } else if (type === "minus") {
  //     houses[index].price -= 10000;
  //     res.status(200).send(houses);
  //   } else {
  //     res.sendStatus(400);
  //   }
  // },
};
