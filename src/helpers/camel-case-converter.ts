export default class CamelCaseConverter {
    static convert(input: any) : any {
        if(this.isArray(input)) {
            return input.map((e) => this.convert(e));
        }
        else if(this.isObject(input)) {
            return Object.keys(input).reduce((o, key) => {
                o[this._convert(key)] = this.convert(input[key]);
                return o;
            }, {});
        }
        else {
            return input;
        }
    }

    private static _convert(key) : string {
        return key.replace(/_([a-z])/g, function (m, w) {
            return w.toUpperCase();
        });
    }

    private static isObject(value): boolean {
        return value.constructor == Object;
    }

    private static isArray(value): boolean {
        return value.constructor == Array;
    }
}