function testing(str) {
 let nbre = 0;
  if (str.length > 1 && str.length < 10) {
    nbre = str.length;
  } else {
   throw new Error("String should be at least 1 character long and not longer than 10 characters");
  };

  return nbre;
}

module.exports = testing;