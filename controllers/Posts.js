import Posts from "../modals/Posts.js";
// Create, READ, Update, delete
const GetPerson = async (req, res) => {
  const getPerson = await Posts.find();

  if (getPerson) {
    return res.json(getPerson);
  } else {
    return res.status(500).json({ msg: "Not find Data" });
  }
};

const createPerson = async (req, res) => {
  const { name, age, city } = req.body;
  const getPerson = await Posts.create({ name, age, city });
  return res
    .status(201)
    .json({ msg: "Person created successfully", getPerson });
};

const UpdatePerson = async (req, res) => {
  const { name, age, city } = req.body;
  const updatePerson = await Posts.findOneAndUpdate({
    _id: req.params.id,
    name: name,
    age: age,
    city: city,
  });

  return res
    .status(201)
    .json({ msg: "Person updated successfully", updatePerson });
};

const DeletePerson = async (req, res) => {
  const deletedPerson = await Posts.findOneAndDelete({ _id: req.params.id });
//   if (!deletedPerson) {
//     return res.status(404).json({ msg: "Person not found" });
//   }

  return res
    .status(200)
    .json({ msg: "Person deleted successfully", deletedPerson });
};
export default { GetPerson, createPerson, UpdatePerson, DeletePerson };
