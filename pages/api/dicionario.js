import dicionario from './dicionario.json';

export default (req, res) => {
  res.status(200).json(dicionario);
}