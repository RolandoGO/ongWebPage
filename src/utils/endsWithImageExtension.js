const imageExtensions = [".jpg", ".jpeg", ".png"];

export default function endsWithImageExtension(url) {
  if (url) {
    const urlExtensionStartIndex = url.lastIndexOf(".");
    const urlExtension = url.slice(urlExtensionStartIndex);
    const fileName = url.slice(
      url.lastIndexOf("/") + 1,
      urlExtensionStartIndex
    );
    return fileName && imageExtensions.includes(urlExtension);
  }
  return false;
}
