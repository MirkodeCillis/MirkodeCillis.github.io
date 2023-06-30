const jobs = [
    {
        time: {
            from_it: 'Luglio 2020',
            to_it: 'Giugno 2023',
            from_en: 'July 2020',
            to_en: 'June 2023'
        },
        company: 'Overzoom S.r.l.',
        color: '#FF568A',
        skills_it: [
            'Sviluppatore software Front-end con AngularJS',
            'Sviluppatore software Back-end con Spring Boot',
            'Supporto clienti per problematiche e funzionalità'
        ],
        skills_en: [
            'Sviluppatore software Front-end con AngularJS',
            'Sviluppatore software Back-end con Spring Boot',
            'Supporto clienti per problematiche e funzionalità'
        ]
    },
    {
        time: {
            from_it: 'Luglio 2023',
            to_it: 'Attuale',
            from_en: 'July 2023',
            to_en: 'Current'
        },
        company: 'Sabanet S.r.l.',
        color: '#2BBBA1',
        skills_it: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Praesent erat risus, commodo vitae interdum quis, posuere in eros',
            'Maecenas interdum pulvinar mi vel mollis',
            'Donec magna tortor, feugiat sed dui in, ultricies mattis elit'
        ],
        skills_en: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Praesent erat risus, commodo vitae interdum quis, posuere in eros',
            'Maecenas interdum pulvinar mi vel mollis',
            'Donec magna tortor, feugiat sed dui in, ultricies mattis elit'
        ]
    },
    {
        time: {
            from_it: '????',
            to_it: '????',
            from_en: '????',
            to_en: '????'
        },
        company: 'Coming soon',
        color: '#555ac0',
        skills_it: [
            'Per ora è tutto, ma ci saranno aggiornamenti.'
        ],
        skills_en: [
            'That\'s all folks, stay tuned.'
        ]
    }
];

const timeline_container = document.getElementById('jobs_timeline');

jobs.forEach((job, index) => {
    let skills_list = '';
    job['skills_' + lang].forEach(skill => {
        skills_list += `
        <li> ${skill} </li>
        `;
    });

    timeline_container.innerHTML += `
    <li class="job_timeline" style="--accent-color: ${job.color}">
        <div class="date">${job.time['from_' + lang]} - ${job.time['to_' + lang]}</div>
        <div class="title">${job.company}</div>
        <div class="descr">
            <ul>
                ${skills_list}
            </ul>
        </div>
    </li>
    `;
});