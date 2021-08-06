<?php
  $parsed_url = parse_url($_SERVER['REQUEST_URI']);
  echo $parsed_url['path']
 ?>
