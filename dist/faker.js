"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.paragraphs = exports.paragraph = exports.sentences = exports.sentence = exports.words = exports.word = void 0;
const simple_words_json_1 = __importDefault(require("./data/simple_words.json"));
const end_words_json_1 = __importDefault(require("./data/end_words.json"));
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}
function word() {
    return getRandomElement(simple_words_json_1.default);
}
exports.word = word;
function words(count) {
    return Array.from({ length: count }, () => word()).join(' ');
}
exports.words = words;
function sentence(sentenceLength) {
    const length = sentenceLength;
    const sentence = `${words(length)} ${getRandomElement(end_words_json_1.default)}.`;
    return sentence;
}
exports.sentence = sentence;
function sentences(count, sentenceLength) {
    return Array.from({ length: count }, () => sentence(sentenceLength)).join(' ');
}
exports.sentences = sentences;
function paragraph(paragraphLength, sentenceLength) {
    const length = paragraphLength;
    return sentences(length, sentenceLength);
}
exports.paragraph = paragraph;
function paragraphs(count, paragraphLength, sentenceLength) {
    return Array.from({ length: count }, () => paragraph(paragraphLength, sentenceLength)).join('\n\n');
}
exports.paragraphs = paragraphs;
//# sourceMappingURL=faker.js.map