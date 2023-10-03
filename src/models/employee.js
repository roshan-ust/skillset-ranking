export default class Employee {
    id = '';
    name = '';
    uid = '';
    email = '';
    account = '';
    reportingManager = '';
    skillsets = '';

    constructor(employee) {
        this.id = employee?.id ?? '';
        this.name = employee?.name ?? '';
        this.uid = employee?.uid ?? '';
        this.email = employee?.email ?? '';
        this.account = employee?.account ?? '';
        this.reportingManager = employee?.reportingManager ?? '';
        this.skillsets = employee?.skillsets ?? '';
    }
}