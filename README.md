Write Markdown in Arabic

#### What's in:

- RTL writing direction
- Simple design & font
- LocalStorage support

#### Used resources:

- [markdown-js](https://github.com/evilstreak/markdown-js)
- [Droid Arabic Naskh](http://www.google.com/fonts/earlyaccess)

Deployed to Heroku.

### Run the code with nodejs on localhost

Make sure that [node.js] and [npm] are installed.

After that run

```
npm install
```

to install the dependencies from the package.json file

Then run

```
npm start
```

to start the local server at [localhost:5000]

[Gulp] is used to concat CSS files and then use [gulp-uncss] to make it smaller

So if you have done any changes in CSS files please run `gulp` in the command line to run the task.

You can also open the `/public/index.html` file directly.

[node.js]:https://nodejs.org/
[npm]:https://www.npmjs.com/
[Gulp]:http://gulpjs.com/
[gulp-uncss]:https://github.com/ben-eb/gulp-uncss
[localhost:5000]:http://localhost:5000/