PhantomJS Capture
=================

`targets.tsv` -> `results/*.png`


## Install

#### Get PhantomJS
- [Download | PhantomJS](http://phantomjs.org/download.html)

```bash
// OS X
$ brew install phantomjs
```

#### Get npm packages
```bash
$ npm install
```


## Prepare
__targets.tsv__ :: out filename and url (tab separated)

example:
```txt
google	http://www.google.co.jp/
yahoo	http://www.yahoo.co.jp/
github	https://github.com/
```

## Run

```bash
$ node index
```

- see `results` directory.
