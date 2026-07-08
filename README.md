# App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.3.

# mengatasi ERROR version pada nodejs ver 24

jika error 
```
this[kHandle] = new _Hash(algorithm, xofLen, algorithmId, getHashCache());              
Error: error:0308010C:digital envelope routines::unsupported
```
pakai scrupt ini di CMD

``` 
$env:NODE_OPTIONS="--openssl-legacy-provider" 
```
 
## build and serve

```
ng serve --source-map=false

ng build --source-map=false

```

# dist
folder dist sudah bisa dipakai production, setting connnection ada di assets/config.js