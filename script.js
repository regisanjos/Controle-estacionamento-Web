document.addEventListener('DOMContentLoaded', () => {
    const cadastroSection = document.getElementById('cadastro');
    const listaVagasSection = document.getElementById('lista-vagas');
    const navCadastro = document.getElementById('nav-cadastro');
    const navLista = document.getElementById('nav-lista');
    const formCadastro = document.getElementById('form-cadastro');
  
    // Função para alternar entre as telas
    navCadastro.addEventListener('click', () => {
      cadastroSection.classList.add('active');
      listaVagasSection.classList.remove('active');
      listaVagasSection.classList.add('hidden');
    });
  
    navLista.addEventListener('click', () => {
      listaVagasSection.classList.add('active');
      cadastroSection.classList.remove('active');
      cadastroSection.classList.add('hidden');
    });
  
    // Evento de envio do formulário de cadastro
    formCadastro.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const formData = {
        placa: document.getElementById('placa').value,
        proprietario: document.getElementById('proprietario').value,
        apartamento: document.getElementById('apartamento').value,
        bloco: document.getElementById('bloco').value,
        modelo: document.getElementById('modelo').value,
        cor: document.getElementById('cor').value,
        vaga: document.getElementById('vaga').value
      };
  
      console.log('Cadastro realizado:', formData);
      alert('Cadastro realizado com sucesso!');

      formCadastro.reset();
    });
  });
  