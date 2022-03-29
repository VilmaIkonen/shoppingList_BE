const express = require("express")
const ListItem = require("./listSchema.ts")

const router = express.Router();

router.get("/", (req: any, res: any) => {
  res.send("We are live!")
});

router.post("/", (req: any, res: any, data: any) => {
  const listItem = new ListItem({
    itemName: req.body.itemName,
    amount:req.body.amount,
    note: req.body.note
  })

  // save to DB:
  listItem.save()
  .then((data: any) => {
    res.json(data) // for showing the data that was just send to db
  })
  .catch((error: any) => {
    res.json({message: error})
  }) 
})

export default router;