
export default class TimeUtils {
    constructor() {

    }
    static minuteSeconds = 60;
    static hourSeconds = 3600;
    static daySeconds = 86400;



    static getTimeSeconds = (time) => (TimeUtils.minuteSeconds - time) | 0;
    static getTimeMinutes = (time) => ((time % TimeUtils.hourSeconds) / TimeUtils.minuteSeconds) | 0;
    static getTimeHours = (time) => ((time % TimeUtils.daySeconds) / TimeUtils.hourSeconds) | 0;
    static getTimeDays = (time) => (time / TimeUtils.daySeconds) | 0;

}
