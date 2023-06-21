let i = 0;
let speed = 15;
sentence = "import personality.*;\n\
\n\
public class Mirko {\n\
    public static void main(String[] args) {\n\
        Developer MdC = new Developer(\"Mirko de Cillis\");\n\
        MdC.addQuality( new Empathy() );\n\
        MdC.addQuality( new Curiosity() );\n\
        MdC.addQuality( new Passion() );\n\
        MdC.addQuality( new Reliability() );\n\
        MdC.addQuality( new Enterprising() );\n\
        MdC.addQuality( new WorkHard() );\n\
        MdC.addQuality( new ProblemSolving() );\n\
        MdC.addQuality( new Troubleshooting() );\n\
\n\
        MdC.start();\n\
    }\n\
}";

let cursor = '<span id="cursor">|</span>';

function typeWriter() {
    if (i <= sentence.length) {
        $('#editor').html( sentence.substring(0,i) + cursor);
        hljs.highlightBlock( $("#editor").get(0) );
        i++;
        setTimeout(typeWriter, speed);
    } else {
        activeNextButton();
    }
}

let iscursor = true;
let cursor_speed = 400;        
setInterval(() => {
    if(iscursor) {
        $('#cursor').css('opacity', 0);
        iscursor = false;
    } else {
        $('#cursor').css('opacity', 1);
        iscursor = true;
    }
}, cursor_speed);

function activeNextButton() {
    $('.code-btn-container #link-about').attr('href', '#about');
    if ( $('html').attr('lang') === 'it') {
        $('.code-btn-container .link-button span').html('<i class="fas fa-caret-right"></i>&nbsp;Esegui');
    } else {
        $('.code-btn-container .link-button span').html('<i class="fas fa-caret-right"></i>&nbsp;Run Code');
    }
    
    $('.code-btn-container .link-button').addClass('link-button-bg');
    $('.code-btn-container div h6').css('opacity', '0')
                                   .css('transition', 'opacity 0.6s ease')
                                   .css('-webkit-transition', 'opacity 0.6s ease');
}

typeWriter();

