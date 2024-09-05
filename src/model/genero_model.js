let nextId = 1;
const data = new Date();
body.atualizado_em = data;
body.criado_em = data;

const model = (body, id = nextId++) => {
    if(body.nome != undefined && body.nome != "" && body.criado_em != undefined && body.criado_em != "" && body.atualizado_em != undefined && body.atualizado_em != ""){
        
        return {
            id, 
            nome: body.nome,
            criado: body.criado_em,
            atualiza: body.atualizado_em
        }
    }
}

module.exports = model