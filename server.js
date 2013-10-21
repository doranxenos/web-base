var connect = require('connect')
  , http = require('http')
  , lessCompiler = require('./lessCompiler.js')
  , app
;

var handleLess = new lessCompiler.LessCompiler({ src: './app/less' });

app = connect()
      .use(connect.static('app'))
      .use('/js/lib/', connect.static('node_modules/requirejs/'))
      .use('/node_modules', connect.static('node_modules'))
      .use('/css', handleLess)
;

http.createServer(app).listen(8000, function() {
  console.log('Running on http://localhost:8000');
});
