function logout(){
    firebase.auth().signOut().then(()=> {
        window.location.href="../../index.html";
    }).catch(() => {
        alert("Erro ao fazer logout");
    })
}

function telaDispositivos(){
    window.location.href="../home/home.html";
}

function telaInformacao(){
    window.location.href="informacoes.html";
}

function telaRelatorio(){
    window.location.href="../relatorio/relatorio.html";
}

function telaConfig(){
    window.location.href="../configuracoes/configuracoes.html";
}
