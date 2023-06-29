$('.contacts-label').click( function() {
    $('.contacts').toggleClass('contacts-display');
});

const contacts_info = [
    {
        href: 'mailto:decillis.web@gmail.com',
        icon: 'far fa-envelope'
    },
    {
        href: 'https://www.instagram.com/mirko_decillis/',
        icon: 'fab fa-instagram'
    },
    {
        href: 'https://t.me/mirkolandiaa',
        icon: 'fab fa-telegram-plane'
    },
    {
        href: 'https://wa.me/393737680998',
        icon: 'fab fa-whatsapp'
    },
    {
        href: 'https://github.com/MirkodeCillis',
        icon: 'fab fa-github'
    },
    {
        href: 'https://www.linkedin.com/in/mirko-de-cillis-9851b11a7/',
        icon: 'fab fa-linkedin-in'
    }
];

const contact_links = document.getElementsByClassName('contact-links');
for (let contactLink of contact_links) {
    contacts_info.forEach(contact => {
        contactLink.innerHTML += `
        <a href="${contact.href}"><div class="icon"><i class="${contact.icon} fa-2x"></i></div></a>
        `;
    });
}