// Scrivi un programma che simuli un distributore di bevande e che rispetti i seguenti passaggi:
// l’utente deve poter inserire un numero
// in console dev’essere stampato il messaggio del distributore
// se inserisce 1, seleziona acqua e quindi stampare in console: “E’ stata selezionata l’acqua”
// se inserisce 2, seleziona coca cola e quindi stampare in console: “E’ stata selezionata coca cola”
// se inserisce 3, seleziona birra e quindi stampare in console: “E’ stata selezionata birra”
// se inserisce qualcosa di diverso, il programma dovra’ riproporre automaticamente la domanda di partenza


let valid = true
let sceltaBevanda; 

while(valid) {
sceltaBevanda= prompt('Scegli bevanda');
if (sceltaBevanda == 1){
    console.log('E’ stata selezionata l’acqua');
    valid=false;
}
else if (sceltaBevanda == 2) {
    console.log('E’ stata selezionata coca cola');
    valid=false;
}
else if (sceltaBevanda == 3) {
    console.log('E’ stata selezionata birra');
    valid=false;
}
}
