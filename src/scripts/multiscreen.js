export class GetClientPhone {
    static getPhone() {
        const userAgent = navigator.userAgent;
        const checks = [
            /iPhone\s8\+/i.test(userAgent),
            /iPhone\sSE/i.test(userAgent),
            /iPhone\s11\sPro/i.test(userAgent),
            /iPhone\s14\+/i.test(userAgent),
            /iPhone\s14\sPlus\+/i.test(userAgent),
            /iPhone\s14\sPro\sMax\+/i.test(userAgent)
        ];
        return  checks.slice(2).some((check) => check) ? "big" : "small";
    }
}