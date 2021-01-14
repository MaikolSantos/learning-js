const retornaHora = (data) => {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando uma instância de Date');
    }
    if (!data) {
      data = new Date();
    }
    return data.toLocaleTimeString('pt-br', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
}

try {
    // const data = new Date('2020-01-13 23:59:56');
    const hora = retornaHora();
    console.log(hora);
} catch (error) {
    console.log('Deu erro');
} finally {
    console.log('Até mais');
}
