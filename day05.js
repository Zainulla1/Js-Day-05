
//Exercise 1

//By using JS function return a passed string 
//with letters in alphabetical order
//Example string: 'webmaster'
//Example output: 'abemrstw'

const alphabeticalOrder  = (str) =>
    str.split('').sort((a,b) => a > b ? 1 : -1)
.join('');

console.log(alphabeticalOrder('webmaster'));
console.log(alphabeticalOrder('javascript'));

//Exeeercise 2

//By using JS function  accepts a string  as a parameter
//and counts the number of vowels within the string.

const countLetters = (
    str, letters = ['a', 'e', 'i', 'o', 'u']) => 
str
 .split('')
 .filter(s => letters.indexOf(s) > -1)
 .length; 

 console.log(countLetters('aeiou'));


 //Exercise 3

 //By using JS function convert amount of coins.
 //Example input: 46 and possible coins 25, 10, 5, 2, 1
 //output: 25, 10, 10, 1

 const countCoins = (money, coins = [25, 10, 5, 2, 1]) =>
    {
        const totalcoins = [];
        for(let i=0; i < coins.length; i+=1) {
            const thisCoinNum = Math.floor(money / coins[i]);
            for(let y=0; y<thisCoinNum; y+=1) {
                totalcoins.push(coins[i]);
            }
            money -= coins[i] * thisCoinNum;
        }
        return totalcoins;
    }

    console.log(countCoins(46));

    //Exercise 4

    //JS function to extract unique character from a string

     //method-1
    const getUniqueChar = (str) =>
        str.split('').filter(
            (item,index,arr) =>
                arr.slice(index + 1).indexOf(item) === -1
        );

        console.log(getUniqueChar('aaabbbccc'));

        //method-2
        const getUniqueChars = (str) =>
            [...new set(str.split(''))];

        console.log(getUniqueChars('aaabbbccc'));

        //Exercise 5

        //JS function to find the first not repeated
        //Example string: 'abacddbec'
        //Expected Output:'e'
        
        const getNonRepeatedChars = (str) =>
            str.split('')
                .filter((item,index,arr) =>
                  arr.filter(arrItem => arrItem === item).length === 1
            );

            console.log(getNonRepeatedChars('abacddbec'));
