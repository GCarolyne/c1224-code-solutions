import { Document, DocumentIndex } from './map-index';

/**
 * Queries a DocumentIndex and returns all the Documents that contain
 * any of the words in the query, as a Set.
 */
export function queryIndex(index: DocumentIndex, query: string): Set<Document> {
  const docs = new Set<Document>();
  const terms = query.toLowerCase().match(/\b(\w+)\b/g);
  terms?.forEach((term) => {
    const tDocs = index.get(term);
    tDocs?.forEach((d) => docs.add(d));
  });
  return docs;
}
