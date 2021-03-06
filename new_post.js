const prompt = require('prompt');
const mkdirp = require('mkdirp');
const moment = require('moment');
const _ = require('underscore.string');
const yaml = require('js-yaml');
const fs = require('fs');

prompt.start();

/*eslint-disable */
prompt.get(['title'], (err, result) => {
  'use strict'
  const dir = `./pages/blog/${ moment().format('YYYY-MM-DD') }-${ _.slugify(result.title) }`
  mkdirp.sync(dir)

  let postFileStr = '---\n'

  const frontmatter = {
    title: result.title,
    date: moment().toJSON(),
    layout: 'post',
    draft: true,
  }

  postFileStr += yaml.safeDump(frontmatter)
  postFileStr += '---\n'

  fs.writeFileSync(`${ dir }/index.md`, postFileStr, {
    encoding: 'utf-8',
  })

  return console.log(dir);
})
