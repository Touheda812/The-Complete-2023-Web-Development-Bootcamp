let twitterText = 'The sun cast a warm glow over the Become '; 
let textLength = twitterText.length;
console.log(`The length of the text ${textLength}`); 
charactersLeft = textLength - 182; 

if(textLength > 182){
    console.log(`You have written more than 182 character --> ${textLength}`);
}
else if(textLength !=182){
    console.log(`You have ${charactersLeft} characters left`);
}

else{
    console.log('You have written 182 characters');
}
