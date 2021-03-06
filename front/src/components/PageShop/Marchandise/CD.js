import modern from "../../Img/cd/11030823.jpg";
import suburb from "../../Img/cd/2870756.jpg";
import kabal from "../../Img/cd/4903172.jpg";
import air from "../../Img/cd/cd.jpg";
import debout from "../../Img/cd/1190014.jpg";
import block from "../../Img/cd/5257966.jpg";
import humanity from "../../Img/cd/1620891.jpg";
import gilbert from "../../Img/cd/2956512.jpg";
import tulamort from "../../Img/cd/15068582.jpg";
import molest from "../../Img/cd/3191336.jpg";
import yuka from "../../Img/cd/3302833.jpg";
import hvb from "../../Img/cd/3765006.jpg";
import cartouche from "../../Img/cd/6209348.jpg";
import binouze from "../../Img/cd/4903181.jpg";
import resaka from "../../Img/cd/6972435.jpg";
import casa2 from "../../Img/cd/4058353.jpg";
import casa3 from "../../Img/cd/5279758.jpg";
import casa4 from "../../Img/cd/7128563.jpg";
import union from "../../Img/cd/union.jpg";
import compare from "../../Function/Compare";

const cd = [
    {
        id: 11030823,
        artiste: "Modern Attack",
        name: "The Last Minute",
        image: `${modern}`,
        format: "CD",
        quantity: "2",
        price: "Libre",
    },
    {
        id: 2870756,
        artiste: "The Midnight Rovers",
        name: "Suburb Rock'n'Roll",
        image: `${suburb}`,
        price: "7 €",
        format: "CD",
        quantity: "3",
    },
    {
        id: 4903172,
        artiste: "Kabal La Revolte",
        name: "Doujans",
        image: `${kabal}`,
        price: "Libre",
        format: "CD",
        quantity: "3",
    },
    {
        id: 10390983,
        artiste: "Grabuge",
        name: "Perdu D'avance",
        image: `${air}`,
        price: "5€",
        format: "CD",
        quantity: "1",
    },
    {
        id: 1190014,
        artiste: "Ya Basta",
        name: "Toujours Debout",
        image: `${debout}`,
        price: "Libre",
        format: "CD",
        quantity: "4",
    },
    {
        id: 1620891,
        artiste: "No Leader & Block h",
        name: "Split Album",
        image: `${block}`,
        price: "Libre",
        format: "CD",
        quantity: "2",
    },
    {
        id: 5257966,
        artiste: "Left For Dead",
        name: "Humanity",
        image: `${humanity}`,
        price: "Libre",
        format: "CD",
        quantity: "2",
    },
    {
        id: 2956512,
        artiste: "Gilbert & Ses Problèmes",
        name: "En transit",
        image: `${gilbert}`,
        price: "Libre",
        format: "CD",
        quantity: "3",
    },
    {
        id: 15068582,
        artiste: "Tulamort",
        name: "Des hauts et des bars",
        image: `${tulamort}`,
        price: "8€",
        format: "CD",
        quantity: "5",
    },
    {
        id: 3191336,
        artiste: "S-Molest",
        name: "La Nostra Vita",
        image: `${molest}`,
        price: "Libre",
        format: "CD",
        quantity: "3",
    },
    {
        id: 3302833,
        artiste: "Yuka",
        name: "Qu'enfin souffle le vent de la résistance",
        image: `${yuka}`,
        price: "Libre",
        format: "CD",
        quantity: "2",
    },
    {
        id: 3765006,
        artiste: "H.V.B",
        name: "Valstar Revenge",
        image: `${hvb}`,
        price: "Libre",
        format: "CD",
        quantity: "3",
    },
    {
        id: 6209348,
        artiste: "Cartouche",
        name: "Bread & Roses",
        image: `${cartouche}`,
        price: "8€",
        format: "CD",
        quantity: "3",
    },
    {
        id: 6972435,
        artiste: "Resaka Sonora",
        name: "Buenaventura",
        image: `${resaka}`,
        price: "8€",
        format: "CD",
        quantity: "2",
    },
    {
        id: 4903181,
        artiste: "Binouze Metamphe Gang",
        name: "ST",
        image: `${binouze}`,
        price: "Libre",
        format: "CD",
        quantity: "3",
    },
    {
        id: 4058353,
        artiste: "VA - Benefit Cassa Anti-Rep",
        name: "VOL2",
        image: `${casa2}`,
        price: "Libre",
        format: "CD",
        quantity: "2",
    },
    {
        id: 5279758,
        artiste: "VA - Benefit Cassa Anti-Rep",
        name: "VOL3",
        image: `${casa3}`,
        price: "Libre",
        format: "CD",
        quantity: "4",
    },
    {
        id: 7128563,
        artiste: "VA - Benefit Cassa Anti-Rep",
        name: "VOL4",
        image: `${casa4}`,
        price: "Libre",
        format: "CD",
        quantity: "2",
    },
    {
        id: 15582752,
        artiste: "Union Thugs",
        name: "Folklore Ouvrier",
        image: `${union}`,
        price: "8€",
        format: "CD",
        quantity: "45",
    },
];

cd.sort(compare);
export default cd;
