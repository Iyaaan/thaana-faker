Thaana Faker
============

Thaana Faker is a simple package that generates random Thaana language text for testing and development purposes.

Installation
------------

    npm install thaana-faker

Usage
-----

    import {
        word,
        words,
        sentence,
        sentences,
        paragraph,
        paragraphs
    } from 'thaana-faker';
    
    // Example usage
    const randomWord = word();
    const randomSentence = sentence(5);
    const randomParagraph = paragraph(3, 5);
    
    console.log(randomWord);
    console.log(randomSentence);
    console.log(randomParagraph);
    

API
---

### `word(): string`

Generates a random Thaana word.

### `words(count: number): string`

Generates a string of random Thaana words, separated by spaces.

### `sentence(sentenceLength: number): string`

Generates a random Thaana sentence of the specified length.

### `sentences(count: number, sentenceLength: number): string`

Generates a string of random Thaana sentences, separated by spaces.

### `paragraph(paragraphLength: number, sentenceLength: number): string`

Generates a random Thaana paragraph containing a specified number of sentences.

### `paragraphs(count: number, paragraphLength: number, sentenceLength: number): string`

Generates a string of random Thaana paragraphs, separated by two newlines.

License
-------

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
