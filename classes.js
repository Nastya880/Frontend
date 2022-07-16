/*

У экземпляра класса должны присутствовать св-ва:
-name string
-grade string Для простоты предположим, что система грейдов будет иметь значения от L1 до L4
-hardSkills string[]
-company string


Так же должны иметься три метода:

-changeCompany(newCompanyName) - сотрудник может сменить компанию, либо же просто уволиться
-upGrade(newGradeName) - сотрудник может повысить квалификацию
-addSkill(newSkillName) - сотрудник может дополнить список своих скиллов.
*/


class Empleyee {
    constructor (name, grade, hardSkills, company) {
        this.name = name;
        this.grade = grade;
        this.hardSkills = hardSkills;
        this.company = company;
    }

    changeCompany(newCompanyName) {
        this.company = newCompanyName;
    };
    upGrade(newGradeName) {
        this.grade = newGradeName
    };
    addSkill(newSkillName) {
        this.hardSkills.push(newSkillName);
    };
}

let worker = new Empleyee("User1", "L2", "frontend", "www");
worker.changeCompany("new comp");
console.log(worker.name);
console.log(worker.company);
