let pronouns = ['I', 'You', 'He', 'She', 'They', 'We'];
let verbs = ['run', 'walk', 'skip'];
let locations = ['store', 'gym', 'school'];
let frequencys = ['everyday', 'sometimes', 'never'];

let selectPronoun = () => {
    let pronoun = Math.floor(Math.random()*(pronouns.length));
    return pronoun;
};

let selectVerb = () => {
    let verb = Math.floor(Math.random()*(verbs.length));
    return verb;
};

let selectLocation = () => {
    let location = Math.floor(Math.random()*(locations.length));
    return location;
};

let selectFrequency = () => {
    let frequency = Math.floor(Math.random()*(frequencys.length));
    return frequency;
};

let createMessage = () => {
    let pronoun = pronouns[selectPronoun()];
    let verb = verbs[selectVerb()];
    let frequency = frequencys[selectFrequency()];
    let location = locations[selectLocation()];
    if (pronoun === 'He' || pronoun === 'She'){
        verb = verb + 's';
    }
    let randomMessage = `${pronoun} ${verb} to the ${location} ${frequency}.`;
    console.log(randomMessage);
};

createMessage();