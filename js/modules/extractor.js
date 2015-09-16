export default (images) => {
    return images
        .map(image => image.data.url)
        .filter(url => /jpg$/.exec(url));
};