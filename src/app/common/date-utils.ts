export class DateUtils {

    static formatDateInISOFormat(diaryTargetDate: Date): string {
        return diaryTargetDate.getFullYear() + '-' +
            ('0' + (diaryTargetDate.getMonth() + 1)).slice(-2) +
            '-' + ('0' + diaryTargetDate.getDate()).slice(-2);
    }
}
