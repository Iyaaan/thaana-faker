// types/index.d.ts
declare module 'thaana-faker' {
    export function word(): string;
    export function words(count: number): string;
    export function sentence(sentenceLength: number): string;
    export function sentences(count: number, sentenceLength: number): string;
    export function paragraph(paragraphLength: number, sentenceLength: number): string;
    export function paragraphs(count: number, paragraphLength: number, sentenceLength: number): string;
}
  