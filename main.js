class DigitalClock {

    constructor(element) {
        this.element = element;
    }

    //Methode qui permet de lancer la clock et la réfraichir toutes les 500ms
    start() {
        setInterval(() => {
            this.update();
        }, 500);
    }

    //Methode qui permet de mettre à jours la clock 
    update() {
        const parts = this.getTimeParts();  
        const minuteFormated = parts.minute.toString().padStart(2, "0");    //Permet de mettre un 0 si un seul Digit
        const secondFormated = parts.second.toString().padStart(2, "0");

        const timeFormatted = `${parts.hour}:${minuteFormated}:${secondFormated}`; // Permet d'indiquer la structure qui sera injectée
        const dateFormatted = `${parts.Jday},${parts.month} ${parts.today}`;

        this.element.querySelector(".clock-time").textContent = timeFormatted;  //Injecte les éléments à la balise "clock-time"
        this.element.querySelector(".clock-day").textContent = dateFormatted;   //Injecte les éléments à la balise "clock-day"

    }

    //Methode qui permet de récupérer chaque élément de la date actuelle 
    getTimeParts() {
        const now = new Date(); //Récupère la date actuelle

        //Liste qui va permettre d'afficher le mois correspondant à l'index envoyer par l'objet Date
        var listMonth = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL","AUG", "SEP", "OCT", "NOV", "DEC"];
        //Liste qui va permettre d'afficher le jours correspondant à l'index envoyer par l'objet Date
            //Attention l'index 0 correspond à Sunday et non Monday
        var listDay = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THUSDAY", "FRIDAY", "SATURDAY"];
        
        return {
            hour: now.getHours() % 24 || 24,    //Permet de définir l'affichage sous 24 et non 12
            minute: now.getMinutes(),
            second: now.getSeconds(),

            Jday: listDay[now.getDay()],
            month: listMonth[now.getMonth()],
            today: now.getDate(),
        };
    }

}

const clockElement = document.querySelector(".clock");  //Définie l'élément clock 
const clockObject = new DigitalClock(clockElement);     // Crée l'objet clock

clockObject.start();                                    //Lance la clock 