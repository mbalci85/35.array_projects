const countries = [
	'Albania',
	'Bolivia',
	'Canada',
	'Denmark',
	'Ethiopia',
	'Finland',
	'Germany',
	'Hungary',
	'Ireland',
	'Japan',
	'Kenya',
];

// Use the countries array to change every element to an array of like this:

// [ ['Albania', 'ALB', 7], ['Bolivia', 'BOL', 7], …… ]

const countriesList = (arr) => {
	return arr.map((country) => [
		country,
		country.slice(0, 3).toUpperCase(),
		country.length,
	]);
};

console.log(countriesList(countries));

//=========================================================================

// Write a script which generates “-“ after every even numbers in a string. Use array methods.

const evenFinder = (str) => {
	let res = str.split('').map((item) => {
		if (parseFloat(item) % 2 == 0) {
			item += '-';
		}
		return item;
	});

	return res.join('');
};

console.log(evenFinder('670av1245d00fsd2'));
