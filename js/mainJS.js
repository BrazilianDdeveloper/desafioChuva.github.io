(function () {

    //abre e fecha resumo

    const $resumoContainer = document.querySelector(".summary__content");
    const $resumoMinimizado = document.querySelector(".summary__text");
    const $resumoExpandido = document.querySelectorAll(".invisible-text");

    $resumoContainer.addEventListener('click', function () {
        toggleInvisible($resumoMinimizado);
        let contador = 0;
        while (contador < $resumoExpandido.length) {
            toggleInvisible($resumoExpandido[contador]);
            contador++;
        };
    });

    function toggleInvisible(elemento) {
        elemento.classList.toggle('invisible');
    }

    //abre e fecha as perguntas dos usuários

    const $perguntaContainer = document.querySelector('.interactive-container');
    const $perguntaExpandida = document.querySelector('.question-expanded');

    $perguntaContainer.addEventListener('click', function () {
        toggleInvisible($perguntaContainer);
        toggleInvisible($perguntaExpandida);
    });

    $perguntaExpandida.addEventListener('click', function () {
        toggleInvisible($perguntaExpandida);
        toggleInvisible($perguntaContainer);
    });

    // Criando tópicos

    const $criarTopicoInicial = document.querySelector('.discussions__share-ideas');
    const $criandoTopico = document.querySelector('#creating-topic');
    const $assuntoTopico = document.querySelector('#assunto');
    const $conteudoTopico = document.querySelector('#new-question__content');
    const $btnEnviarTopico = document.querySelector('#send');
    const $containerTopicoCriado = document.querySelector('.topic-was-created');
    const $criandoTopicov2 = document.querySelector('#create-topic-v2');
    const $criandoTopicoV2Detalhe = document.querySelector('.limit-container');

    $criarTopicoInicial.addEventListener('click', function () {
        toggleInvisible($criarTopicoInicial);
        toggleInvisible($criandoTopico);
    })

    $btnEnviarTopico.addEventListener('click', function () {
        toggleInvisible($criandoTopico);
        toggleInvisible($containerTopicoCriado);
        toggleInvisible($criandoTopicoV2Detalhe);
    })

    $criandoTopicov2.addEventListener('click', criandoTopicoNovamente);
    function criandoTopicoNovamente() {
        limpandoTopicoAnterior();
        toggleInvisible($containerTopicoCriado);
        toggleInvisible($criandoTopicoV2Detalhe);
        toggleInvisible($criandoTopico);
    }

    /*É necessário limpar os inputs do meu form para que o novo tópico não tenha
    o mesmo conteúdo da questão anterior*/

    function limpandoTopicoAnterior() {
        $assuntoTopico.value = "";
        $conteudoTopico.value = "";
    }

    const $campoDeTexto = document.querySelector('#new-question__content');
    const $transformaNegrito = document.querySelector("#btn-negrito");
    const $transformaItalico = document.querySelector("#btn-italico");
    $transformaNegrito.addEventListener('click', negrito);
    $transformaItalico.addEventListener('click', italico);

    function negrito() {
        $campoDeTexto.classList.toggle('fw900');
    }

    function italico() {
        $campoDeTexto.classList.toggle('italico');
    }

})();
