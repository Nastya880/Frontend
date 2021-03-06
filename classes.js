/*

У экземпляра класса должны присутствовать св-ва:
-name string
-grade string Для простоты предположим, что система грейдов будет иметь значения от L1 до L4
-hardSkills string[]
-company string


Так же должны иметься три метода:

-changeCompany(newCompanyName) - сотрудник может сменить компанию, либо же просто уволиться
-upGrade() - сотрудник может повысить квалификацию
-addSkill(newSkillName) - сотрудник может дополнить список своих скиллов.
*/

class Employee {
    constructor (name, grade, hardSkills, company) {
        this.name = name;
        this.grade = grade;
        this.hardSkills = [];
        this.company = company;
        for (let i = 0; i < hardSkills.length; ++i) {
            this.hardSkills[i] = hardSkills[i];
        }
    }

    changeCompany(newCompanyName) {
        this.company = newCompanyName;
    };
    upGrade() {
        if (this.grade === "L1")
            this.grade = "L2";
        else if (this.grade === "L2")
            this.grade = "L3";
        else this.grade = "L4";
    };
    addSkill(newSkillName) {
        this.hardSkills.push(newSkillName);
    };
}

let worker = new Employee("User1", "L2", ["frontend"], "www");
console.log("Not changes", "\nname: ", worker.name, "\ngrade: ", worker.grade,
    "\nhardSkills: ", worker.hardSkills, "\ncompany: ", worker.company)
worker.changeCompany("new comp");
worker.upGrade();
worker.addSkill("Backend")
console.log("-------------------");
console.log("Not changes", "\nname: ", worker.name, "\ngrade: ", worker.grade,
    "\nhardSkills: ", worker.hardSkills, "\ncompany: ", worker.company)
