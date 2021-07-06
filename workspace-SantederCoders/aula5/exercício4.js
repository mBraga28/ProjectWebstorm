let sinal = 'vermelho';

switch (sinal){
  case 'verde':
    console.log('pode passar');
    break;
  case 'amarelo':
    console.log('atenção!!! está prestes a fechar...');
    break;
  case 'vermelho':
    console.log('PARE!!! está fechado...');
    break;
  default :
    console.log('não é um valor válido');
    break;
}

