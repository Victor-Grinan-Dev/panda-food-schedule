import toEs from './es.json';

export const translate = (phrase, toLang='es') => {
    //TODO: make this fuction sent the data as lower and return each sentencewith capital start.
    switch (toLang) {
        case 'es':
            if(toEs[phrase]){
                return toEs[phrase];
            }else
            return phrase;
        default:
            return phrase;
    }
}