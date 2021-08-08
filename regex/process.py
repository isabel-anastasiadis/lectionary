import re


def buildRegex():
	optionalBookNumber = '([1-9]\s){0,1}'
	book = '[a-z.]{3,}'

	chapterAndVerseComponent = '\s[1-9][0-9.\-\u2013endab]*(\sof\s[0-9]{1,2}){0,1}'

	optionalChapterAndVerses = '(' + chapterAndVerseComponent + '){0,1}' \
							   + '(,' + chapterAndVerseComponent + '){0,1}'


	verseRegex = '(?P<verse>' + optionalBookNumber \
				 + book + optionalChapterAndVerses + ')'
	print verseRegex

def compute():

	p = re.compile('ab*', re.UNICODE | re.IGNORECASE)
	iterator = p.finditer('aaabbb')
	for match in iterator:
		print match.span()


if __name__ == "__main__":
	compute()
	buildRegex()