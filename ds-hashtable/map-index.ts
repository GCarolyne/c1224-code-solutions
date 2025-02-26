export type Document = {
  title: string;
  content: string;
};

export type DocumentIndex = Map<string, Set<Document>>;

/**
 * Builds a DocumentIndex from a list of Documents.
 * The index's keys are the words in all the documents,
 * and the values are the documents the word appears in.
 */
export function buildIndex(docs: Document[]): DocumentIndex {
  const DocumentIndex = new Map<string, Set<Document>>();
  for (let i = 0; i < docs.length; i++) {
    const doc = docs[i];
    const words = doc.content.split(/\s+/);
    for (const word of words) {
      let docSet = DocumentIndex.get(word);
      if (!docSet) {
        docSet = new Set<Document>();
        DocumentIndex.set(word, docSet);
      }
      docSet.add(doc);
    }
  }
  return DocumentIndex;
}
