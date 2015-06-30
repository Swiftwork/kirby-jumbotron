<?
/**
 * Jumbotron panel field for Kirby 2
 *
 * @author: Erik Hughes - http://swiftdroid.com
 * @version: 0.1
 *
 */

class JumbotronField extends BaseField {

  static public $assets = array(
    'js' => array(
      'jumbotron.js'
    ),
    'css' => array(
      'jumbotron.css'
    )
  );

  public function content() {
    $wrapper = new Brick('div');
    $wrapper->addClass('field-content');

    $hidden = new Brick('input');
    $hidden->attr(array(
      'type' => 'hidden',
      'name' => $this->name(),
    ));

    $input = new Brick('div');
    $input->addClass('jumbotron-field');
    $input->data('field', 'jumbotronfield');

    if($this->value()) {
      $thumbnail = new Brick('img');
      $thumbnail->addClass('thumbnail');
      $thumbnail->attr('src', $this->page()->image($this->value())->url());
      $hidden->attr('value', $this->value());
    } else {
      $thumbnail = new Brick('i');
      $thumbnail->addClass('fa fa-camera-retro fa-3x thumbnail');
    }

    $remove = new Brick('i');
    $remove->addClass('fa fa-times remove');

    $input->append($hidden);
    $input->append($remove);
    $input->append($thumbnail);
    $wrapper->append($input);
    return $wrapper;
  }
}