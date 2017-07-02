var m = /(?=\S)+?[^\,]+(?=\s*(,|$))/g;
//here is the meaning as i understand it. please correct me if i'm not right: (?=\S) - start capturing only when there's no whitespace in front [^,]+ - capture as much 'not-commas' as possible ? - but don't capture what can be captured by the next group (?=\s*(,|$)) - capture all whitespaces before a comma or end of string /g - repeat through all the string – meandre Oct 25 '11 at 9:03

	