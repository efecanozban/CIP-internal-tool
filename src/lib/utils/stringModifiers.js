export function formatPhoneNumber(phoneNumberString) {
    if (phoneNumberString.length == 11) {

        return `${phoneNumberString.slice(0, 4)}-${phoneNumberString.slice(4, 7)}-${phoneNumberString.slice(7, 11)}`
    }
    else if (phoneNumberString.length == 10) {

        return `${phoneNumberString.slice(0, 3)}-${phoneNumberString.slice(3, 6)}-${phoneNumberString.slice(6, 10)}`
    }
    return phoneNumberString;
}

export function noDashPhoneNumber(phoneNumberString) {
    let res = phoneNumberString.split("-").join("");
    return res
}

export function msToDate(ms) {
    let ans = ""

    const s = Math.round(Math.abs(ms / 1000));
    const m = Math.round(Math.abs(s / 60))
    const h = Math.round(Math.abs(m / 60))
    const d = Math.round(Math.abs(h / 24))
    const y = Math.round(Math.abs(d / 365))

    if (y >= 1) { ans += `${y} year ${d % 365} day` }
    else if (d >= 1) { ans += `${d} day ${h % 24} hour` }
    else if (h >= 1) { ans += `${h} hour ${m % 60} minute` }
    else if (m >= 1) { ans += `${m} minute` }

    if (ms < 0) { ans += " late" }

    return ans

}

export function DdMmYyyy(date) {
    const yyyy = date.getFullYear();
    let mm = date.getMonth() + 1; // Months start at 0!
    let dd = date.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    return dd + '/' + mm + '/' + yyyy;
}

export function DdMmYyyyToYyyyMmDd(date) {
    let resDate = ""
    resDate += date.substring(6, 10)
    resDate += "-"
    resDate += date.substring(3, 5)
    resDate += "-"
    resDate += date.substring(0, 2)
    return resDate
}