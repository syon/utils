PhantomJS Capture
=================

`targets.tsv` -> `results/*.png`


## Install

#### Get PhantomJS
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
index_page	http://localhost/
error_page	http://localhost/50x.html
```

## Run

```bash
$ node index
```

- see `results` directory.
