function focus() {

    [...document.getElementsByTagName('input')].forEach(e => {
        e.addEventListener('focus', onFocus);
        e.addEventListener('blur', onBlur);
    });
    console.log('TODO:...');


    function onFocus(event) {
        event.target.parentNode.className = 'focused';
    }

    function onBlur(event) {
        event.target.parentNode.className = '';
    }

}