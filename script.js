function notasAluno(listaAlunos){
    var acumulado = "<table><thead><tr>"
    + "<th>Nome</th>"
    + "<th>RA</th>"
    + "<th>P1</th>"
    + "<th>P2</th>"
    + "<th>Média</th>"
    + "</tr></thead>"
    + "<tbody>";

    var classeP1 = 0, classeP2 = 0, aprovados = 0, dp = 0;

    for(let i = 0; i<listaAlunos.length; i++){

        var P1 = Number(listaAlunos[i].P1);
        var P2 = Number(listaAlunos[i].P2);

        var media = (P1+P2) / 2;

        classeP1 += P1;
        classeP2 += P2;

        if(media >= 6){
            aprovados++;
        }else{
            dp++;
        }

        var corMedia = media >= 6 ? 'blue' : 'red';

        acumulado = acumulado
                    + "<tr><td>"+listaAlunos[i].nome+"</td>"
                    + "<td>"+listaAlunos[i].ra +"</td>"
                    + "<td>"+listaAlunos[i].P1 +"</td>"
                    + "<td>"+listaAlunos[i].P2 +"</td>"
                    + "<td style='color: " + corMedia + "'>" + media.toFixed(2) + "</td></tr>";
    }

    acumulado = acumulado + "</tbody></table>";
    document.write(acumulado);

    let tabelaMedia = "<table><thead><tr>"
    + "<th>Média P1</th>"
    + "<th>Média P2</th>"
    + "<th>Aprovados</th>"
    + "<th>DP<th>"
    + "</tr></thead>"
    + "<tbody>";

    let mediaP1 = classeP1 / listaAlunos.length;
    let mediaP2 = classeP2 / listaAlunos.length;

    tabelaMedia = tabelaMedia
    + "<tr><td>" + mediaP1.toFixed(1) + "</td>"
    + "<td>" + mediaP2.toFixed(1) + "</td>"
    + "<td>" + aprovados + "</td>"
    + "<td>" + dp + "</td></tr>";

    tabelaMedia = tabelaMedia + "</tbody></table>";

document.write(tabelaMedia);

}



//Exercício: Implemente uma função que receba uma lista de alunos de isw-008(nome,ra,notaP1, notaP2)
//A função deverá 
//a) mostrar na tela os alunos;
//b) notas menores que 6 em vermelho, maiores ou iguais em azul;
//c) a média da p1 da turma;
//d) a média da p2 da turma;
//e) a média de cada aluno;
//f) a quantidade de aprovados;
//g) a quantidade de reprovados.
//obs: para testar coloque 5-10 alunos.