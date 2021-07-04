//Desafio Capgemini - Parte 1

var valor_investido, visualizacao_anuncio_original, cliques_anuncio, compartilhamentos, novas_visualizacoes, visualizacoes_total

valor_investido = parseFloat(prompt("Informe o valor investido"))

//a partir do valor investido, eu consigo calcular quantas pessoas vizualizam o anuncio original
visualizacao_anuncio_original = valor_investido*30
visualizacao_anuncio_original = parseInt(visualizacao_anuncio_original) 
//alert("visualizacao_anuncio_original: " + visualizacao_anuncio_original)

//a partir das visualizações do anuncio, eu posso calcular quantas pessoas clicam nele
cliques_anuncio = visualizacao_anuncio_original*0.12
//alert("cliques_anuncio: " + cliques_anuncio)

//a partir do num de cliques, eu posso calcular quantos compartilham
compartilhamentos = cliques_anuncio*0.15
//alert("compartilhamentos: " + compartilhamentos)

//a partir do compartilhamento, eu consigo calcular as novas visualizações
novas_visualizacoes = compartilhamentos*40
//alert("novas_visualizacoes: " + novas_visualizacoes)

//a partir dessas informações, eu posso estimar quantas visualizações o anúncio teve
visualizacoes_total = visualizacao_anuncio_original + novas_visualizacoes
visualizacoes_total = parseInt(visualizacoes_total)

alert("O anúncio terá " + visualizacoes_total + " visualizações!")