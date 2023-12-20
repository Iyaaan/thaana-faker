import wordList from './data/thaana.json';
import endingsList from './data/end.json';

function getRandomElement<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
}

export function word(): string {
    return getRandomElement(wordList);
}

export function words(count: number): string {
    return Array.from({ length: count }, () => word()).join(' ');
}

export function sentence(sentenceLength: number): string {
    const length: number = sentenceLength;
    const sentence: string = `${words(length)} ${getRandomElement(endingsList)}.`;
    return sentence;
}

export function sentences(count: number, sentenceLength: number): string {
    return Array.from({ length: count }, () => sentence(sentenceLength)).join(' ');
}

export function paragraph(paragraphLength: number, sentenceLength: number): string {
    const length: number = paragraphLength;
    return sentences(length, sentenceLength);
}

export function paragraphs(count: number, paragraphLength: number, sentenceLength: number): string {
    return Array.from({ length: count }, () => paragraph(paragraphLength, sentenceLength)).join('\n\n');
}