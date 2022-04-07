exports.getAlunos = (req, res, next) => {
  res.send('alunos');
}

exports.postAluno = (req, res, next) => {
  console.log(req.body);
  res.send(req.body);
}