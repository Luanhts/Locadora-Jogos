const estudio = require("../controller/estudio_controller.js")
const publicadora = require("../controller/publicadora_controller.js")
const data = new Date();
body.lancado_em = data;
body.atualizado_em = data;
body.criado_em = data;

let nextId = 1;

const model = (body, id = nextId++) => {

    if (
        livro_controller.show(body.livro_id) &&
        estudante_controller.show(body.estudante_id && body.data_aluguel != "" && body.data_aluguel != undefined
        && data_devolucao != "" && data_devolucao != undefined)
    ){
        return {
            id,
            nome: body.nome,
            genero_id: body.genero_id,
            estudio_id: body.estudante_id,
            publicadora_id: body.publicadora_id,
            lancado_em: body.lancado_em,
            criado_em: body.criado_em,
            atualizado_em: body.atualizado_em
        }
    }
}

module.exports = model