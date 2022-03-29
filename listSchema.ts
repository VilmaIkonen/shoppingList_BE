import  {Schema, model} from "mongoose";

interface ListItem {
  isInCart: boolean;
  itemName: string;
  amount: number;
  unit: string;
  note: string;
  dateAdded: Date;
}

const ListSchema = new Schema<ListItem>({
  isInCart: Boolean,
  itemName: {
    type: String,
    required: true,
  },
  amount: Number,
  unit: String,
  note: String,
  dateAdded: {
    type: Date,
    default: Date.now,
  },
})

// const UserSchema = new mongoose.Schema({
//   username: {
//     type: String,
//     required: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
// })

// const ListItem = model<ListItem>("ListItems", ListSchema)
// export default ListItem;
module.exports = model("ListItems", ListSchema)
// module.exports = mongoose.model("User", UserSchema)