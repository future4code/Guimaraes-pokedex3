export const useHandleType = type =>{
    switch(type){
        case 'normal':
            return "#A8A77A";
        case 'ghost':
            return "#EFEFF2";
        case 'fire':
            return "#EE8130";
        case 'fighting':
            return "#C22E28";
        case 'dragon':
            return "#6F35FC";
        case 'electric':
            return "#F7D02C";
        case 'ground':
            return "#E2BF65";
        case 'ice':
            return "#96D9D6";
        case 'water':
            return "#6390F0";
        case 'grass':
            return "#7AC74C";
        case 'bug':
            return "#A6B91A";
        case 'stile':
        case 'dark':
            return "#705746";
        case 'rock':
            return "#B6A136";
        case 'poison':
            return "#A33EA1";
        case 'psychic':
            return '#F95587';
        case 'fairy':
            return "#D685AD"
        case 'ghost':
            return "#735797";
        case 'flying':
            return "#A98FF3";
        case 'steel':
            return "#B7B7CE";
        default:
            return "#EFEFF2";
    }
}