const GRAPHQL_URL = 'http://localhost:4000/';

async function atualizaUser() {
  const response = await fetch(GRAPHQL_URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        mutation {
          atualizaUser(
            id:"9",
            nome:"Mariana de Marques", 
            ativo: false, 
            email: "mm@m.com", 
            role: COORDENACAO) {
            code
            mensagem
            user {
              nome
            }
          }
        }
      `,
    }),
  });

  const { data } = await response.json();
  console.log(data);
  return data;
}


async function adicionaUser() {
  const response = await fetch(GRAPHQL_URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      query: 
        `
        mutation {
          adicionaUser(nome:"Laura Barros", ativo: true, email: "l@l.com", role: "DOCENTE") {
            nome
            role {
              type
            }
          }
        }
        `,
        }),
  });
  const { data } = await response.json();
  console.log(data);
  return data;
}

atualizaUser();