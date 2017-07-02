<?php
require()//same as include but gives fatal error upon failure. It runs faster than require_once()
require_once()//same as above but will require a file only once and runs slower
include()//same as require but gives only a warning upon failure
include_once()//same as include but does this only once.


auto_prepend_file = "c:/Program Files/Apache Software
Froundation/Apache2.2//include/header.php"
auto_append_file = "c:/Program Files/Apache Group/Apache2/include/footer.php"
For Unix, like this:
auto_prepend_file = “/home/username/include/header.php”
auto_append_file = “/home/username/include/footer.php

?>