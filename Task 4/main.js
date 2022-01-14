const el = document.querySelector('input[name="username"]');
el.addEventListener('keyup', () => {
 console.log('какая-то клавиша была нажата и отпущена');
});



const form = document.forms[0],
            btn = form.lastElementChild;
 
        form.addEventListener("change", form_change);
        form.addEventListener("submit", form_submit);
 
        function form_change() {
            btn.disabled = form.username.value.length < 6
                || form.password.value.length < 6;
        }
        function form_submit(event) {
            event.preventDefault();
 
        }