// Follow along with the examples here
function say(greeting, firstName) {
  console.log("I was called!");
  return `${greeting}, ${firstName}!`;
}

function kyc(fullname, age, location) {
  console.log("User Fullname: " + fullname);
  console.log("User Age " + age);
  console.log("User Location: " + location);
  console.log(say("Good morning", fullname));
}

kyc("Valenine", 465, "Nairobi");
