<?php
    function recursiva() {
        function fn($valor = 1) {
            if($valor % 2 == 0 && $valor % 3 == 0 && $valor % 10 == 0) {
                return $valor;
            }
            return fn($valor + 1);
        }
        return fn();
    }    
echo recursiva();