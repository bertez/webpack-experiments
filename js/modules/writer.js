class Writer {
    constructor($element, images) {
        this.$element = $element;
        this.images = images;
    }

    write() {
        this.images.forEach(url => {
            this.$element.append(`<img src="${url}">`);
        });
    }
}

export default Writer;
