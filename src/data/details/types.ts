/** One concrete use of an idea. Software unless marked `realWorld`. */
export interface Application {
  title: string;
  body: string;
  realWorld?: boolean;
}

/**
 * The long-form content behind a card's detail page.
 *
 * Editorial limits: 3-6 key points of 8-15 words, 2-3 paragraphs that each run
 * 3-4 lines at full page width (roughly 300-440 characters), and applications
 * that name something specific instead of restating the definition.
 */
export interface ContentDetail {
  keyPoints: string[];
  details: string[];
  applications: Application[];
}
