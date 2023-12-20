import wordList from './data/thaana.json' assert { type: "json" };
import endingsList from './data/end.json' assert { type: "json" };
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}
export function word() {
    return getRandomElement(wordList);
}
export function words(count) {
    return Array.from({ length: count }, () => word()).join(' ');
}
export function sentence(sentenceLength) {
    const length = sentenceLength;
    const sentence = `${words(length)} ${getRandomElement(endingsList)}.`;
    return sentence;
}
export function sentences(count, sentenceLength) {
    return Array.from({ length: count }, () => sentence(sentenceLength)).join(' ');
}
export function paragraph(paragraphLength, sentenceLength) {
    const length = paragraphLength;
    return sentences(length, sentenceLength);
}
export function paragraphs(count, paragraphLength, sentenceLength) {
    return Array.from({ length: count }, () => paragraph(paragraphLength, sentenceLength)).join('\n\n');
}
//# sourceMappingURL=faker.js.map