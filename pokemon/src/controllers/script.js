import PokemonIsland from "../models/Poke.js";
import { bst } from "./dependencies.js"
let registerBtn = document.getElementById("register-btn");

registerBtn.addEventListener("click", () => {
    let name = document.getElementById("nameIsland").value;
    let region = document.getElementById("regionIsland").value;
    let climate = document.getElementById("climateIsland").value;

    let island = new PokemonIsland(name, region, climate);
    if (bst.add(island)) {
        Swal.fire({
            icon: "success",
            title: "Éxito...",
            text: "Registro Exitoso!"
        });
    } else {
        Swal.fire("Falló el registro");
    }

    document.getElementById("nameIsland").value = "";
    document.getElementById("regionIsland").value = "";
    document.getElementById("climateIsland").value = "";
});

let searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click", () => {
    let nameSearch = document.getElementById("nameSearch").value;
    let searchResult = bst.search(nameSearch);
    if (searchResult == null) {
        Swal.fire("No encontrado");
    } else {
        Swal.fire(`La isla es ${searchResult.value.name}`);
    }
    document.getElementById("nameSearch").value = "";
});

let searchMinValueBtn = document.getElementById("searchMin");
searchMinValueBtn.addEventListener("click", () => {
    let minIsland = bst.searchMin();
    console.log("minIsland:", minIsland);
    if (minIsland == null) {
        Swal.fire("El árbol está vacío.");
    } else {
        Swal.fire(`Isla con el nombre mínimo: ${minIsland.name} - ${minIsland.region} - ${minIsland.climate}`);
    }
});

let searchMaxValueBtn = document.getElementById("searchMax");
searchMaxValueBtn.addEventListener("click", () => {
    let maxIsland = bst.searchMax();
    console.log("maxIsland:", maxIsland);
    if (maxIsland == null) {
        Swal.fire("El árbol está vacío.");
    } else {
        Swal.fire(`Isla con el nombre máximo: ${maxIsland.name} - ${maxIsland.region} - ${maxIsland.climate}`);
    }
});

let inOrderBtn = document.getElementById("printList");
inOrderBtn.addEventListener("click", () => {
    let resultString = "";
    bst.inOrder(value => {
        resultString += `${value.name} - ${value.region} - ${value.climate}\n`;
    });
    Swal.fire(resultString);
});
