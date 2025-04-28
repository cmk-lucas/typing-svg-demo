// Fonction pour afficher le texte de manière animée
const typingEffect = (text, elementId, delay = 100) => {
    const element = document.getElementById(elementId);
    let index = 0;
    
    const typeWriter = () => {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, delay);
        } else {
            document.getElementById("message").classList.remove("hidden");
        }
    };

    typeWriter();
};

// Personnalisation du texte
const lines = [
    "Bienvenue sur mon profil GitHub",
    "Je suis Lucas, développeur passionné",
    "Passionné par la cybersécurité, le développement web, et l'IA",
    "N'hésitez pas à découvrir mes projets !"
];

// Lancer l'effet avec une ligne à la fois
let currentLine = 0;
const typingInterval = 3000; // Intervalle entre chaque ligne

const displayText = () => {
    typingEffect(lines[currentLine], 'typing-svg', 100);
    currentLine++;
    if (currentLine < lines.length) {
        setTimeout(displayText, typingInterval); // Attendre avant de passer à la ligne suivante
    }
};

// Initialisation de l'animation
displayText();
