export default function handler({ query: { id } }, res) {
  res.status(200).json({ id: id, name: "metadata" });
}