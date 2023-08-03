const intro_title = {
    title_it: 'Mi presento',
    title_en: 'Let me introduce myself',
    languages_it: 'Tecnologie che conosco',
    languages_en: 'Technologies I know'
}
const intro_content = [
    {
        icon: 'fa-university',
        it: 'Mi chiamo Mirko de Cillis, vengo da Trani e mi sono diplomato come <span class="highlight">perito informatico</span> ' +
            'all\'ITIS "Jannuzzi" di Andria nel 2021. Attualmente frequento l\'ultimo anno del Corso di Laurea Triennale in ' +
            '<span class="highlight">Ingegneria Gestionale</span> al Politecnico di Bari.',
        en: 'My name is Mirko de Cillis, I\'m from Trani I got an <span class="highlight">high school diploma in IT</span> in 2021. ' +
            'I am currently attendining the final year of the Bachelor\'s Degree in <span class="highlight">Management Engineering</span>' +
            'at the Politecnico di Bari University.'
    },
    {
        icon: 'fa-dumbbell',
        it: 'Una cosa molto importante per me è lo <span class="highlight">sport</span>: mi aiuta a scaricare la ' +
            'tensione tra studio e lavoro e mi fa sentire anche più energico. Nel cuore avrò sempre la <span class="highlight">boxe</span>: ' +
            'sono stato un pugile agonista nel 2021, purtroppo senza mai aver disputato incontri. ' +
            'Al momento mi sto avvicinando al <span class="highlight">powerlifting</span>, un\'altra disciplina che mi piace molto.',
        en: '<span class="highlight">Sport</span> is very important to me: it helps me to relieve tension built up between study and work, ' +
            'and it makes me feel more energetic. A sport that will always find a place in my heart is <span class="highlight">boxe</span>: ' +
            'I was a boxer in 2021, even though I have never fought officially. ' +
            'Nowadays, I\'m discovering <span class="highlight">powerlifting</span>, another sport I really like.'
    },
    {
        icon: 'fa-line-chart',
        it: 'Sono anche un appassionato di <span class="highlight">finanza</span>: ' +
            'nel tempo libero gestico un piccolo portafoglio in cui ho riposto una parte dei miei risparmi.',
        en: 'I\'m also keen on <span class="highlight">finance</span>: in the free time I manage a little investment portfolio ' +
            'where I store a part of my savings.'
    },
    {
        icon: 'fa-lightbulb-o',
        it: 'Se dovessi descrivermi con tre aggettivi - sperando di non risultare arrogante in questo -, direi che questi sarebbero: ' +
            '<span class="highlight">empatico</span>, <span class="highlight">organizzato</span>, <span class="highlight">razionale</span>. ' +
            'Nonostante non abbia molta esperienza nel settore alle spalle, ho sempre svolto tutti i miei\n' +
            'compiti con il <span class="highlight"> massimo impegno</span>, per ottenere sempre la soluzione migliore. Adoro le sfide\n' +
            'e mi piace approfondire un argomento fino a quando non mi reputo soddifatto del\n' +
            'risultato ottenuto; quando mi viene assegnato un compito faccio di\n' +
            'tutto pur di portarlo al termine e ottenere la <span class="highlight"> soluzione migliore</span>.',
        en: 'Se dovessi descrivermi con tre aggettivi - sperando di non risultare arrogante in questo -, direi che questi sarebbero: ' +
            '<span class="highlight">empatico</span>, <span class="highlight">organizzato</span>, <span class="highlight">razionale</span>. ' +
            'Nonostante non abbia molta esperienza nel settore alle spalle, ho sempre svolto tutti i miei\n' +
            'compiti con il <span class="highlight"> massimo impegno</span>, per ottenere sempre la soluzione migliore. Adoro le sfide\n' +
            'e mi piace approfondire un argomento fino a quando non mi reputo soddifatto del\n' +
            'risultato ottenuto; quando mi viene assegnato un compito faccio di\n' +
            'tutto pur di portarlo al termine e ottenere la <span class="highlight"> soluzione migliore</span>.'
    }
];

const intro_languages = [
    {
        src: './img/icons/web_dev.png',
        label: 'Web Development'
    },
    {
        src: './img/icons/typescript.svg',
        label: 'TypeScript'
    },
    {
        src: './img/icons/clanguage.svg',
        label: 'C'
    },
    {
        src: './img/icons/java.svg',
        label: 'Java'
    },
    {
        src: './img/icons/spring.svg',
        label: 'Spring'
    },
    {
        src: './img/icons/nodejs.svg',
        label: 'NodeJS'
    },
    {
        src: './img/icons/angular.svg',
        label: 'Angular'
    },
    {
        src: './img/icons/react.svg',
        label: 'React'
    },
    {
        src: './img/icons/git.svg',
        label: 'Git'
    },
    {
        src: './img/icons/mysql.svg',
        label: 'MySQL'
    },
    {
        src: './img/icons/mongodb.svg',
        label: 'MongoDB'
    },
    {
        src: './img/icons/nginx.svg',
        label: 'NginX'
    },
    {
        src: './img/icons/docker.svg',
        label: 'Docker'
    },
];

const intro_div = document.getElementById('my-introduction');
const intro_title_html = document.createElement('h5');
intro_title_html.innerHTML = intro_title['title_' + lang];
intro_div.append(intro_title_html);

intro_content.forEach((content) => {
    intro_div.innerHTML += `
    <p class="grid about-paragraph">
        <i class="fa fa-2x ${content.icon}" aria-hidden="true" style="color: var(--secondary-color)"></i>
        <span>
            ${content[lang]}
        </span>
    </p>
    `;
});

const intro_languages_title_html = document.createElement('h5');
intro_languages_title_html.innerHTML = intro_title['languages_' + lang];
intro_div.append(intro_languages_title_html);
const intro_div_grid_lang = document.createElement('div');
intro_div_grid_lang.className = 'grid about';

intro_languages.forEach(language => {
    intro_div_grid_lang.innerHTML += `
    <div class="tooltip">
        <img src="${language.src}" alt="${language.label}">
        <span class="tooltiptext"> ${language.label}</span>
    </div>
    `;
});

intro_div.append(intro_div_grid_lang);