let current = 0;
let pages = [];

function checkPassword() {
  const pass = document.getElementById("password").value;

  if (pass === "007@Mary") {
    show("cover");
  } else {
    document.getElementById("error").innerText = "Senha errada";
  }
}

function show(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function openBook() {
  current = 0;
  show("book");
  createPages();
}

function createPages() {
  const container = document.getElementById("pages-container");
  if (container.innerHTML !== "") return;

  const textos = [
`Mary 🦇
Nesse último tempo conversando contigo...
eu me animo quando vejo tua mensagem.
É algo simples mas muito bom.
Você aparece tipo Batman kkk.
Mas melhora meu dia.
Eu gosto disso.
E gosto de falar contigo.`,

`Tudo é leve contigo.
Sem pressão.
Só acontece.
E eu gosto disso.
É raro hoje em dia.
Algo simples assim.
Algo verdadeiro.
E eu valorizo.`,

`Eu até rio quando você some.
Mas sinto falta.
Porque tua presença é boa.
É leve.
É diferente.
E já tem valor pra mim.
E isso é real.`,

`Eu tô ansioso pra te ver.
Sem pressa.
Só viver o momento.
Sendo nós mesmos.
E deixando acontecer.
Quero te conhecer mais.
De verdade.`,

`Próxima página em branco para podermos escrever nossa história juntos 💌`
  ];

  for (let i = 0; i < 20; i++) {
    let div = document.createElement("div");
    div.className = "page";

    let text = document.createElement("div");
    text.className = "text-content";

    if (i < textos.length) {
      text.innerHTML = textos[i].replace(/\n/g, "<br>");
    } else {
      text.contentEditable = true;
      text.innerHTML = localStorage.getItem("p" + i) || "";

      text.oninput = () => {
        localStorage.setItem("p" + i, text.innerHTML);
      };
    }

    let num = document.createElement("div");
    num.className = "page-number";
    num.innerText = i + 1;

    div.appendChild(text);
    div.appendChild(num);
    container.appendChild(div);
  }

  pages = document.querySelectorAll(".page");
  pages[0].classList.add("active");
}

function nextPage() {
  pages[current].classList.remove("active");
  current++;

  if (current >= pages.length) current = pages.length - 1;

  pages[current].classList.add("active");
}

function prevPage() {

  if (current === 0) {
    show("cover"); // 🔥 VOLTA PRA CAPA
    return;
  }

  pages[current].classList.remove("active");
  current--;
  pages[current].classList.add("active");
}
