export default class Employee {
    constructor(id = '', name = '', uid = '', email = '', account = '', reportingManager = '', skillsets = '') {
        this.id = id;
        this.name = name;
        this.uid = uid;
        this.email = email;
        this.account = account;
        this.reportingManager = reportingManager;
        this.skillsets = skillsets;
    }
}