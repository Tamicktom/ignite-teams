export function randomId() {
  const dictionary =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const length = 32;
  let id = "";

  for (let i = 0; i < length; i++) {
    id += dictionary.charAt(Math.floor(Math.random() * dictionary.length));
  }

  //add "-" every 8 characters
  return id.replace(/(.{8})/g, "$1-").slice(0, -1);
}
