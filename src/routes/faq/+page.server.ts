import { faqs } from './data';

export function load() {
	return {
		summaries: faqs.map((faq) => ({
			category: faq.category,
			questions: faq.questions.map((question) => ({
				hashLink: question.hashLink,
				question: question.question,
				answer: question.answer
			}))
		}))
	};
}
