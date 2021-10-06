const relogioLegal = () => {
    const relogio = document.querySelector(".relogio");

    let segundos = 0;
    let timer;

    const getSecondsFromDate = (segundos) => {
        const data = new Date(segundos * 1000);

        return data.toLocaleTimeString("pt-BR", {
            hour12: false,
            timeZone: 'GMT'
        })
    }

    const watchStart = () => {
        timer = setInterval(() => {
            segundos++;
            relogio.innerHTML = getSecondsFromDate(segundos);
        }, 1000);
    }

    document.addEventListener("click", (e) => {
        const el = e.target;

        if (el.classList.contains("iniciar")) {
            clearInterval(timer);
            watchStart();
            relogio.classList.remove("pausar-relogio")
        }

        if (el.classList.contains("pausar")) {
            clearInterval(timer);
            relogio.classList.add("pausar-relogio")
        }

        if (el.classList.contains("zerar")) {
            clearInterval(timer);
            segundos = 0;
            relogio.classList.remove("pausar-relogio")
            relogio.innerHTML = "00:00:00"
        }
    })

}

relogioLegal();