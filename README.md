Organews
================

[![Dependency Status](https://gemnasium.com/greenruby/organews.png)](https://gemnasium.com/greenruby/organews)
[![Build Status](https://travis-ci.org/greenruby/organews.png?branch=develop)](https://travis-ci.org/greenruby/organews)
[![Coverage Status](https://coveralls.io/repos/greenruby/organews/badge.png?branch=develop)](https://coveralls.io/r/greenruby/organews?branch=develop)
[![Code Climate](https://codeclimate.com/github/greenruby/organews.png)](https://codeclimate.com/github/greenruby/organews)

This project includes

* a grape api server for an angular front-end.
* a static pages generator
* a mailchimp publication runner
  * includes a limited cli. If you need a fully functionnal cli tool for mailchimp control checkout the mc gem

The need for Organews comes from the newsletter publication Green Ruby http://greenruby.org where the information management follows a specific set of constraints:

* there are modifications made by only one editor
* modifications are made once a week
* the html newsletter is sent via mailchimp
* a website keeps track of the archives
* the archives have to be searchable by article, tag, title, etc.

Currently the Greeen Ruby publication had one year of existence and 1300 links publiched, each with a small set of metadata. So the choice is to use an in-memory database, load everything at api server start. This is of course not a scalable choice but for the start it will do it. The use of the sequel gem anyways permits evolution later on.

Organews is designed to be used by https://github.com/greenruby/grn-static which holds all the content.

Contribute
--------------

* we use git flow, so master is the released version, and all work is done on develop branch
* fork, branch, pull request against develop branch
* do not change the changelog it will be modified at merge
* do not increment the version number it will be done at release

Contributors
---------------

* @mose, author

License - MIT
-----------

Copyright (c) 2014 Mose

```
Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
