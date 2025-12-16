const LIFETIME_YEARS = 50;
export function PhoneCalculation(hoursPerDay) {
    console.log("calculating phone use for: " + hoursPerDay);

    // total hours spent over the lifetime
    const totalHours = hoursPerDay * 365 * LIFETIME_YEARS;

    // convert hours to years
    const yearsOnPhone = totalHours / 8760;

    return yearsOnPhone;
}
export function WorkCalculation(yearsPerLife) {
    return yearsPerLife;
}
export function SchoolCalculation(yearsPerLife) {
    return yearsPerLife;
}
export function SleepCalculation(hoursPerDay) {
     // total hours over a lifetime
    const totalHours = hoursPerDay * 365 * LIFETIME_YEARS;
    // convert hours to years
    const yearsOnSleep = totalHours / 8760;
    return yearsOnSleep;
}
export function FriendsCalculation(hoursPerWeek){
     // total hours over a lifetime
    const totalHours = hoursPerWeek * 52 * LIFETIME_YEARS;
    // convert hours to years
    const yearsOnFriends = totalHours / 8760;
    return yearsOnFriends;
}

export function yearsPerLife(yearsPerLife) {
    return yearsPerLife;
}

export function hoursPerDay(hoursPerDay) {
    const totalHours = hoursPerDay * 365 * LIFETIME_YEARS;
    const years = totalHours / 8760;
    return years;
}

export function hoursPerWeek(hoursPerWeek) {
    // total hours over a lifetime
    const totalHours = hoursPerWeek * 52 * LIFETIME_YEARS;
    // convert hours to years
    const years = totalHours / 8760;
    return years;
}
export function hoursPerMonth(hoursPerMonth) {
    // total hours over a lifetime
    const totalHours = hoursPerMonth * 12 * LIFETIME_YEARS;
    const years = totalHours / 8760;
    return years;
}
