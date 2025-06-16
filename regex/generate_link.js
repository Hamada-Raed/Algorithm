function generateLink(user) {
  link = 'http://www.codewars.com/users/' 
  words = user.split(' ')
  if(words.length !== 1){
    return link + words[0] + "%20" + words[1]
  }
  else {
    return link + user
  }
}


console.log(generateLink('matt c'),'http://www.codewars.com/users/matt%20c');