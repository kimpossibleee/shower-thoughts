
// Compiled from BoredPanda

export const example_post = (): string => {
    const showerThoughtList = [
        'Randomly hearing your favorite song on the radio is more satisfying than playing it directly from your ipod.',
        'Go to bed, you\'ll feel better in the morning" is the human version of "Did you turn it off and turn it back on again?',
        'Maybe plants are really farming us, giving us oxygen until we eventually expire and turn into mulch which they can consume',
        'If my calculator had a history, it would be more embarrassing than my browser history.',
        'Lawyers hope you get sued, doctors hope you get sick, cops hope you\'re criminal, mechanics hope you have car trouble, but only a thief wishes prosperity for you.',
        'If I get up 10 minutes earlier than usual, I treat it like 2 extra hours and end up late for work.',
        'If someone offered to pay for my food and rent for the next 18 years, I\'d do anything they ask of me. But I complained every time I took the trash out while living at my parent\'s house.',
        'I\'ve woken up over 10,000 times and I\'m still not used to it...'
    ]
    return 'Let me give you an example: ' + showerThoughtList[Math.floor(Math.random() * showerThoughtList.length)]
}
