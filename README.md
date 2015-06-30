# Kirby Jumbotron
Simple drag and drop [Kirby CMS](http://http://getkirby.com/) panel field for selecting a jumbotron image.

## Installation

[Download the files](https://github.com/Swiftwork/kirby-jumbotron/archive/master.zip) and put them inside the <code>/site/fields/jumbotron</code> folder. If the folder doesn't exist, you must create it.

## Usage

In your [blueprint](http://getkirby.com/docs/panel/blueprints) add the following field:
```
fields:
  jumbotron:
    label: Jumbotron
    type: jumbotron
```


In your [template](http://getkirby.com/docs/templates) you can use the field like:
```php
<? if($page->jumbotron() != ""): ?>
	<div style="background-image:url(<?= $page->image($page->jumbotron())->url() ?>)" class="jumbotron">
    //...
	</div>
<? endif ?>
```
