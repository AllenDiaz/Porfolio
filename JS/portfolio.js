const heading = 'Hi I am Allen G Diaz I am a Web Developer';
let i = 0;

const typing = () => {
    if (i < heading.length) {
        document.querySelector('.team-heading').innerHTML += heading.charAt(i);
        i++;

        setTimeout(typing, 100);
    }
}

typing();