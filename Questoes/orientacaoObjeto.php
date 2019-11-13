<?php
class Volume {
    private $altura;
    private $largura;
    private $profundidade;

    public function getAltura() {
        return $this->altura;
    }
    
    public function setAltura($altura) {
        $this->altura= $altura;
    }
    
    public function getLargura() {
        return $this->largura;
    }
    
    public function setLargura($largura) {
        $this->largura = $largura;
    }
    
    public function getProfundidade() {
        return $this->profundidade;
    }
    
    public function setProfundidade($profundidade) {
        $this->profundidade = $profundidade;
    }
    public function perimetro() {
        return $this->altura * $this->largura * $this->profundidade;
    }
}
    
$retangulo = new Volume();

$retangulo->setAltura(10);
$retangulo->setLargura(5);
$retangulo->setProfundidade(8);

echo $retangulo->perimetro();
?>