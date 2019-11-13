<?php
    $numero = 1;
    $soma = 0;
	while($numero < 1000){
        if($numero % 3 == 0 || $numero % 5 == 0) {
            $soma += $numero;
        }
		$numero += 1;
    }
    echo $soma;
