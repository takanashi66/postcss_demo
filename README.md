# gulp

## Node.jsのインストール
[Node.jsインストーラ](https://nodejs.org/ja/)

## gulpのインストール

```
npm install -g gulp
```

## プラグイン

+ gulp
+ autoprefixer
+ browser-sync
+ css-mqpacker
+ gulp-postcss
+ postcss-calc
+ postcss-custom-media
+ postcss-custom-properties
+ postcss-import
+ postcss-nesting


### プラグインのインストール

```
npm install
```


## このデモのディレクトリマップ

```
project/
	├ htdocs/
	│		├ common/
	│		│ 	├ sass/
	│		│ 	├ css/
	│		│ 	├ map/
	│		│ 	├ img/
	│		│ 	└ js/	
	│		└index.html
	│
	├ .git/
	├ node_modules/
	├ gulpfile.js
	└ package.json
  
```


## もしプラグインが壊れていた場合

```
npm rebuild [壊れてたプラグイン名]
```
