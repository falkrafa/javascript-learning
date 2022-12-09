function validate(nome, password) {
  if (nome === 'rafael' && password === 123) {
    return true;
  } else {
    return false;
  }
}

let nome = 'rafael';
let password = 111;

let validation = validate(nome, password);

validation ? console.log('Acesso permitido') : console.log('acesso negado');
