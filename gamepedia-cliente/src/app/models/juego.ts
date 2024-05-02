import { Desarrolladora } from "./desarrolladora";
import { Genero } from "./genero";
import { Plataforma } from "./plataforma";

export class Juego {

    codJue: number;
	titJue: string;
	desJue: string;
	preJue: boolean;
	imagen: string;
	fecLanJue: Date;
	juegoGenero: Genero;
	juegoDesarrolladora: Desarrolladora;
    juegoPlataforma: Plataforma;
}
