import data from './livros.json';

export default (req, res) => {
  res.status(200).json(data);
}