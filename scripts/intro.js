const intro_title = {
    title_it: 'Mi presento',
    title_en: 'Let me introduce myself',
    languages_it: 'Linguaggi e framework che conosco',
    languages_en: 'Programming languages and frameworks I know'
}
const intro_content = [
    {
        icon: 'fa-university',
        it: 'Mi chiamo Mirko de Cillis, vengo da Trani e mi sono diplomato come <span class="highlight">perito informatico</span>\n' +
            'all\'ITIS "Jannuzzi" di Andria. Il voto finale? Non mi interessa, ma per vostra conoscenza,\n' +
            'è 100. Attualmente frequente il Corso di Laurea Triennale in <span class="highlight">Ingegneria Gestionale</span>\n' +
            'Politecnico di Bari.'
    },
    {
        icon: 'fa-dumbbell',
        it: 'Non mi fermo solo allo studio: ho ben altre passioni!\n' +
            'Primo fra tutte, l\'<span class="highlight">allenamento</span> è la cosa più importante per me: mi aiuta a scaricare la\n' +
            'tensione tra studio e lavoro e mi fa sentire anche più energico. Sono stato un pugile\n' +
            'agonista iscritto alla <span class="highlight">Federazione Pugilistica Italiana</span>, purtroppo senza mai aver disputato\n' +
            'incontri (il mio pugile preferito? Rocky Marciano :D).'
    },
    {
        icon: 'fa-line-chart',
        it: 'Sono uno sempre disposto a crescere e a <span class="highlight">imparare di continuo</span>, spesso e volentieri in più\n' +
            'settori. Sono anche un appassionato di criptovalute e di <span class="highlight">investimenti</span>: la finanza\n' +
            'decentralizzata è stata il tema che ho portato agli Esami di Stato e continuo a seguire l\'argomento.'
    },
    {
        icon: 'fa-lightbulb-o',
        it: 'Nonostante non abbia molta esperienza nel settore alle spalle, ho sempre svolto tutti i miei\n' +
            'compiti con il <span class="highlight"> massimo impegno</span>, per ottenere sempre la soluzione migliore. Adoro le sfide\n' +
            'e mi piace approfondire un argomento fino a quando non mi reputo soddifatto del\n' +
            'risultato ottenuto; quando mi viene assegnato un compito faccio di\n' +
            'tutto pur di portarlo al termine e ottenere la <span class="highlight"> soluzione migliore</span>.'
    }
];

const intro_languages = [
    {
        src: './img/icons/html.svg',
        label: 'HTML'
    },
    {
        src: './img/icons/css.svg',
        label: 'CSS'
    },
    {
        src: './img/icons/js.svg',
        label: 'JavaScript'
    },
    {
        src: './img/icons/java.svg',
        label: 'Java'
    },
    {
        src: './img/icons/clanguage.svg',
        label: 'C'
    },
    {
        src: './img/icons/nodejs.svg',
        label: 'NodeJS'
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
        src: './img/icons/spring.svg',
        label: 'Spring'
    },
    {
        src: './img/icons/angularjs.svg',
        label: 'AngularJS'
    },
    {
        src: './img/icons/react.svg',
        label: 'React'
    },
];

const intro_div = document.getElementById('my-introduction');
const intro_title_html = document.createElement('h5');
intro_title_html.innerHTML = intro_title['title_' + lang];
intro_div.append(intro_title_html);

intro_content.forEach((content) => {
    intro_div.innerHTML = intro_div.innerHTML.concat(`
    <p class="grid about-paragraph">
        <i class="fa fa-2x ${content.icon}" aria-hidden="true" style="color: var(--secondary-color)"></i>
        <span>
            ${content[lang]}
        </span>
    </p>
    `);
});

const intro_languages_title_html = document.createElement('h5');
intro_languages_title_html.innerHTML = intro_title['languages_' + lang];
intro_div.append(intro_languages_title_html);
const intro_div_grid_lang = document.createElement('div');
intro_div_grid_lang.className = 'grid about';

intro_languages.forEach(language => {
    intro_div_grid_lang.innerHTML = intro_div_grid_lang.innerHTML.concat(`
    <div class="tooltip">
        <img src="${language.src}" alt="${language.label}">
        <span class="tooltiptext"> ${language.label}</span>
    </div>
    `);
});

intro_div.append(intro_div_grid_lang);