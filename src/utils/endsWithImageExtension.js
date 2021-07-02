const imageExtensions = [".jpg", ".jpeg", ".png"];

export default function endsWithImageExtension(url) {
  if (url) {
    const urlExtensionStartIndex = url.lastIndexOf(".");
    const urlExtension = url.slice(urlExtensionStartIndex);
    return imageExtensions.includes(urlExtension);
  }
  return false;
}
