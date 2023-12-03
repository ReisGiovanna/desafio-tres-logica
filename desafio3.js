class infosHeroi {
    constructor (nome, idade, tipo)
    {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.ataque = this.defineAtaque
    }

    defineAtaque()
    {
        if(this.tipo === "Monge")
        {
            return "Artes Marciais"
        }

        else if (this.tipo === "Mago")
        {
            return "Magia"
        }

        else if (this.tipo === "Guerreiro")
        {
            return "Espada"
        }

        else if (this.tipo === "Ninja")
        {
            return "Shuriken"
        }
    }

    atacar() {
        console.log(`O ${tipo} atacou usando ${ataque}`)
    }
}



let heroiEscolhido = new infosHeroi("Jorge", 713, "Monge")
heroiEscolhido.atacar()