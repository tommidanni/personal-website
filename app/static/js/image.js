// Avif/Webp detection
async function supportsEncode() {
  const fallbackclass = 'old';
  if (!this.createImageBitmap) return fallbackclass;

  const avifData =
    'data:image/avif;base64,AAAAFGZ0eXBhdmlmAAAAAG1pZjEAAACgbWV0YQAAAAAAAAAOcGl0bQAAAAAAAQAAAB5pbG9jAAAAAEQAAAEAAQAAAAEAAAC8AAAAGwAAACNpaW5mAAAAAAABAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAARWlwcnAAAAAoaXBjbwAAABRpc3BlAAAAAAAAAAQAAAAEAAAADGF2MUOBAAAAAAAAFWlwbWEAAAAAAAAAAQABAgECAAAAI21kYXQSAAoIP8R8hAQ0BUAyDWeeUy0JG+QAACANEkA=',
    webpData = 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoCAAEAAQAcJaQAA3AA/v3AgAA=',
    avifblob = await fetch(avifData).then((r) => r.blob()),
    webpblob = await fetch(webpData).then((r) => r.blob());
  return createImageBitmap(avifblob).then(
    () => 'avif',
    () => {
      return createImageBitmap(webpblob).then(() => 'webp', () => fallbackclass)
    }
  )
};
// Add the supported format to the body's classList
(async () => {
  const formatSupport = await supportsEncode();
  document.body.classList.add(formatSupport);
})();
