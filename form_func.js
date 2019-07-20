const patterns = {
    phone: /^\d{10}$/,
    username:/^[a-z][a-z\d_]{5,}$/i,
    password: /^[a-z\d@-]{8,20}$/,
    name:/^[a-zA-Z]{2,}\s?[a-zA-Z]*$/,
    email:/^([a-zA-Z\d_\.]+)@([a-z_\.]{2,8})\.([a-z]{2,8})(\.[a-z]{2,8})?$/
};

const inputs = document.querySelectorAll('input');

function validate(field,regex){
    if(regex.test(field.value)){
        field.className = 'valid';
    }
    else{
        field.className = 'invalid';
    }
    if(field.value.length==0) field.className = 'input';
}

inputs.forEach(input=>{
    input.addEventListener('keyup',e=>{
        validate(e.target,patterns[e.target.attributes.name.value]);
    });
});