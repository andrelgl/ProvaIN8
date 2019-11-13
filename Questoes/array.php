<?php
   $siglas = ['ES', 'MG', 'RJ', 'SP'];
   $nomes = ['São Paulo', 'Rio de Janeiro', 'Minas Gerais', 'Espírito Santo'];

   $map = [];

	foreach($nomes as $nome) {
       	$uf = preg_replace('/(?![A-Z])./', '', $nome);
		if(in_array($uf, $siglas)) {
			$map[$uf] = $nome;
		}
    }
	
    print_r($map);
?>