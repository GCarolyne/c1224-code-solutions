import express from 'express';

const app = express();

app.use((req, res, next) => {
  console.log(req.method, req.path);
  console.log('The date is', new Date());
  next();
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});

app.get('/', (req, res) => {
  res.send('Hello Bill');
});

app.get('/notes', (req, res) => {
  res.send('my notes I love');
});

app.post('/notes/:noteId', (req, res) => {
  const { noteId } = req.params;
  res.send(noteId);
});
