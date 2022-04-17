(function () {

    //abre e fecha resumo

    var $resumoContainer = document.querySelector(".summary__content");
    var $resumoMinimizado = document.querySelector(".summary__text");
    var $resumoExpandido = document.querySelectorAll(".invisible-text");
    var arrResumo = [$resumoMinimizado, $resumoExpandido];

    $resumoContainer.addEventListener('click', function () {
        toggleInvisible($resumoMinimizado);
        var contador = 0;
        while (contador < $resumoExpandido.length) {
            toggleInvisible($resumoExpandido[contador]);
            contador++;
        };
    });

    function toggleInvisible(elemento) {
        elemento.classList.toggle('invisible');
    }

    //abre e fecha as perguntas dos usuários

    var $perguntaContainer = document.querySelector('.interactive-container');
    var $perguntaExpandida = document.querySelector('.question-expanded');

    $perguntaContainer.addEventListener('click', function () {
        toggleInvisible($perguntaContainer);
        toggleInvisible($perguntaExpandida)
    });

    $perguntaExpandida.addEventListener('click', function () {
        toggleInvisible($perguntaExpandida);
        toggleInvisible($perguntaContainer);
    });

    // Criando tópicos

    var $criarTopicoInicial = document.querySelector('.discussions__share-ideas');
    var $criandoTopico = document.querySelector('#creating-topic');
    var $assuntoTopico = document.querySelector('#assunto');
    var $conteudoTopico = document.querySelector('#new-question__content');
    var $btnEnviarTopico = document.querySelector('#send');
    var $containerTopicoCriado = document.querySelector('.topic-was-created');
    var $criandoTopicov2 = document.querySelector('#create-topic-v2');
    var $criandoTopicoV2Detalhe = document.querySelector('.limit-container');

    $criarTopicoInicial.addEventListener('click', function () {
        toggleInvisible($criarTopicoInicial)
        toggleInvisible($criandoTopico)
    })

    $btnEnviarTopico.addEventListener('click', function () {
        toggleInvisible($criandoTopico);
        toggleInvisible($containerTopicoCriado);
        toggleInvisible($criandoTopicoV2Detalhe);
    })

    $criandoTopicov2.addEventListener('click', criandoTopicoNovamente);
    function criandoTopicoNovamente() {
        limpandoTopicoAnterior();
        toggleInvisible($containerTopicoCriado)
        toggleInvisible($criandoTopicoV2Detalhe)
        toggleInvisible($criandoTopico)
    }

    /*É necessário limpar os inputs do meu form para que o novo tópico não tenha
    o mesmo conteúdo da questão anterior*/

    function limpandoTopicoAnterior() {
        $assuntoTopico.value = "";
        $conteudoTopico.value = "";
    }

    var $campoDeTexto = document.querySelector('#new-question__content')
    var $transformaNegrito = document.querySelector("#btn-negrito");
    var $transformaItalico = document.querySelector("#btn-italico");
    $transformaNegrito.addEventListener('click', negrito)
    $transformaItalico.addEventListener('click', italico)

    function negrito() {
        $campoDeTexto.classList.toggle('fw900');
    }

    function italico() {
        $campoDeTexto.classList.toggle('italico');
    }

})();
