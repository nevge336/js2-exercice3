import GestionnaireLigue from "./GestionnaireLigue.js";

export default class Router {
    #conteneur;
    #nav;
    #routes;
    #main;

    constructor() {
        this.#conteneur = document.querySelector("[data-component='router']");
        this.#nav = this.#conteneur.querySelector("[data-nav-list]");
        this.#main = this.#conteneur.querySelector("main");

        this.#routes = {
            equipes: GestionnaireLigue.instance.getEquipes.bind(GestionnaireLigue.instance),
            "equipes/:id": GestionnaireLigue.instance.getJoueursParEquipe.bind(GestionnaireLigue.instance),
            "ajout-joueur": GestionnaireLigue.instance.ajouterJoueur.bind(GestionnaireLigue.instance),
            accueil: GestionnaireLigue.instance.accueil.bind(GestionnaireLigue.instance),
        };

        this.init();
    }

    init() {}

    gererChangementUrl() {}
}
