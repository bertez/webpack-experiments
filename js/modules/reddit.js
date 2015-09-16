import jsonp from 'jsonp';

class Reddit {
    constructor(url) {
        this.url = url;
    }

    getImages() {
        console.log(`getting ${this.url}`);
        return new Promise((resolve, reject) => {
            jsonp(this.url, {
                param: 'jsonp',
                count: 40
            }, (err, data) => {
                err ? reject(err) : resolve(data.data.children);
            });

        });
    }
}

export default Reddit;
