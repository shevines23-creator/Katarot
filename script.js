// CRIAR ESTRELAS
for(let i = 0; i < 50; i++){
  const star = document.createElement("div");
    star.classList.add("star");

      const size = Math.random() * 3;
        star.style.width = size + "px";
          star.style.height = size + "px";
            star.style.left = Math.random() * 100 + "vw";
              star.style.animationDuration = (5 + Math.random() * 10) + "s";

                document.body.appendChild(star);
                }
                const cartas = [
                      {nome:"Enamorados", img:"IMAGEM_Enamorados.png"},
                        {nome:"Lua", img:"IMAGEM_Lua.png"},
                          {nome:"Sol", img:"IMAGEM_Sol.png"},
                            {nome:"Torre", img:"IMAGEM_Torre.png"},
                              {nome:"Mago", img:"IMAGEM_Mago.png"},
                                {nome:"Estrela", img:"IMAGEM_Estrela.png"}
                                ];

                                function gerar() {
                                  const container = document.getElementById("cards");
                                    const ia = document.getElementById("ia");

                                      container.innerHTML = "";
                                        let leitura = [];

                                          for (let i = 0; i < 3; i++) {
                                              const carta = cartas[Math.floor(Math.random()*cartas.length)];
                                                  leitura.push(carta.nome);

                                                      const div = document.createElement("div");
                                                          div.classList.add("card");

                                                              div.innerHTML = `
                                                                    <div class="inner">
                                                                            <div class="front">
                                                                                      <img src="IMAGEM_VERSO.png">
                                                                                              </div>
                                                                                                      <div class="back">
                                                                                                                <img src="${carta.img}">
                                                                                                                          <p>${carta.nome}</p>
                                                                                                                                  </div>
                                                                                                                                        </div>
                                                                                                                                            `;

                                                                                                                                                setTimeout(() => div.classList.add("flip"), 500*i);

                                                                                                                                                    container.appendChild(div);
                                                                                                                                                      }

                                                                                                                                                        ia.innerText = interpretar(leitura);
                                                                                                                                                        }

                                                                                                                                                        function interpretar(cartas) {
                                                                                                                                                          let texto = "";

                                                                                                                                                            if (cartas.includes("Sol")) texto += "Sucesso e felicidade. ";
                                                                                                                                                              if (cartas.includes("Lua")) texto += "Dúvidas e emoções confusas. ";
                                                                                                                                                                if (cartas.includes("Torre")) texto += "Mudanças inesperadas. ";
                                                                                                                                                                  if (cartas.includes("Enamorados")) texto += "Decisões no amor. ";
                                                                                                                                                                    if (cartas.includes("Mago")) texto += "Você tem poder de agir. ";
                                                                                                                                                                      if (cartas.includes("Estrela")) texto += "Esperança e proteção. ";

                                                                                                                                                                        return texto || "O destino ainda está oculto.";
                                                                                                                                                                        }
                ]