import http from 'http';

const rotas:  { [key: string]: string }= {
    '/' : 'Curso de express',
    '/padrao' : 'padrao'
}

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  if (req.url){
    res.end(rotas[req.url]);
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});