$('#contatoForm').on('submit', function () {
    var nome = $(this).find('input[name=nome]'), nome = nome.val();
    var email = $(this).find('input[name=email]'), email = email.val();
    var texto = 'Olá destinatário, \nMeu nome é '+ nome +' e meu email é '+ email;
    $(this).find('input[name=Body]').attr('value', texto);
});