import * as express from 'express';
import * as path from 'path';
import * as open from 'opn';
import * as webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err:Error){
  if(err)
    console.error(err);
  else
    open('http://localhost:' + port);
});