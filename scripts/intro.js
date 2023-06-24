const intro_title = {
    it: 'Mi presento',
    en: 'Let me introduce myself'
}
const intro_content = [
    {
        icon: 'fa-university',
        it: 'Mi chiamo Mirko de Cillis, vengo da Trani e mi sono diplomato come <span class="highlight">perito informatico</span>\n' +
            'all\'ITIS "Jannuzzi" di Andria. Il voto finale? Non mi interessa, ma per vostra conoscenza,\n' +
            'è 100. Attualmente frequente il Corso di Laurea Triennale in <span class="highlight">Ingegneria Gestionale</span>\n' +
            'Politecnico di Bari.'
    }
];

const intro_div = document.getElementById('my-introduction');
const intro_title_html = document.createElement('h5');
intro_title_html.innerHTML = intro_title[lang];
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

