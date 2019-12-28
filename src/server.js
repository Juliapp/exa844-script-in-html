const express = require('express');
const app = express();

//falando pra o express pra ele utilizar o json
app.use(express.json);

app.listen(8080, runServer);

function runServer(){
  console.log( 'the server is running');
}

//app.get('...')
//app.post('...')
//app.put('...')
//app.delete('...')

app.get("/clients/:id", function(req, res) {
  const { id } = req.params;
  const client = data.find(cli => cli.id == id);

  if (!client) return res.status(204).json();

  res.json(client);
});

app.post("/clients", function(req, res) {
  const { name, email } = req.body;

  // salvar

  res.json({ name, email });
});

app.put("/clients/:id", function(req, res) {
  const { id } = req.params;
  const client = data.find(cli => cli.id == id);

  if (!client) return res.status(204).json();

  const { name } = req.body;

  client.name = name;

  res.json(client);
});

app.delete("/clients/:id", function(req, res) {
  const { id } = req.params;
  const clientsFiltered = data.filter(client => client.id != id);

  res.json(clientsFiltered);
});
