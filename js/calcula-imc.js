function calculaTodosImcs() {
    percorreArray(trsPacientes, function(pacienteTr) {
        var paciente = montarPaciente(pacienteTr);
    
        var imc = paciente.pegarImc();
    
        var tdImc = pacienteTr.getElementsByClassName('info-imc')[0];
        tdImc.textContent = imc;
    
        console.log(imc);
    });
}

var botao = document.getElementById('calcula-imcs');
botao.addEventListener('click', calculaTodosImcs);