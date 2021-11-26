function getFileExtension1(fileName: string): string {
  return fileName.slice(((fileName.lastIndexOf(".") - 1) >>> 0) + 2);
}

console.log(getFileExtension1("asdfygaw.zip"));

function getFileExtension2(fileName: string): string {
  return fileName.substring(fileName.lastIndexOf(".") + 1);
}

console.log(getFileExtension2("asdfygaw.zip.sdfas"));

function getFileExtension3(fileName: string): string {
  return fileName.split(".").slice(-1).toString().toLowerCase();
}

console.log(getFileExtension3("asdfygaw.zip.23e4dw"));

export { };
