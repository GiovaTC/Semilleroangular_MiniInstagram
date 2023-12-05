import { MenuOption } from "../types/MenuOption.type"

const menu: Array<MenuOption> = [
    {
        icono: "bi-house",
        titulo: "Inicio",
        ruta: ['/search']
    },
    {
        icono: "bi-search",
        titulo: "Buscar",
        ruta: ['/explore']
    },
    {
        icono: "bi-compass",
        titulo: "Explorar",
        ruta: ['']
    },
    {
        icono: "bi-film",
        titulo: "Reels",
        ruta: ['']
    },
    {
        icono: "bi-envelope",
        titulo: "Mensajes",
        ruta: ['']
    },
    {
        icono: "bi-heart",
        titulo: "Notificaciones",
        ruta: ['']
    },
    {
        icono: "bi-plus-square",
        titulo: "Crear",
        ruta: ['']
    },
    {
        icono: "bi-person-bounding-box",
        titulo: "Perfil",
        ruta: ['']
    },
];

export default menu