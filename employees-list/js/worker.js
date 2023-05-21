export default class Worker {
    constructor (name, surname, lastname, workStart, birthDate, post) {
        this.name = name
        this.surname = surname
        this.lastname = lastname
        this.workStart = workStart
        this.birthDate = birthDate
        this.post = post
    }

    get fio() {  //  для сортировки сделал getter
        return `${this.surname} ${this.name} ${this.lastname}`;
    }

    getWorkPeriod() {
        const today = new Date(); //получить текщую дату и время
        return getCorrectAgeText(today.getFullYear() - this.workStart);
    }

    getBirthDate() {
        const yyyy = this.birthDate.getFullYear();
        let mm = this.birthDate.getMonth() + 1; //потому что месяц начинается с нуля
        let dd = this.birthDate.getDate();
        mm = (mm < 10) ? '0' + mm : mm;
        dd = (dd < 10) ? '0' + dd : dd;
        return `${dd}.${mm}.${yyyy}`
    }

    getAge() {
        const today = new Date();
        let age = today.getFullYear() - this.birthDate.getFullYear();
        let mm = today.getMonth() - this.birthDate.getMonth();
        if (mm < 0 || (mm === 0 && today.getDate() < this.birthDate.getDate())) {
            age --;
        }
        return getCorrectAgeText(age);
    }
}


function getCorrectAgeText(age) {
    let count;
    let text;
    count = age % 100;
    if (count >= 5 && count <= 20) {
        text = 'лет';
    } else {
        count = count % 10;
        if (count == 1) {
            text = 'год';
        } else if (count >= 2 && count <= 4) {
            text = 'года';
        } else {
            text = 'лет';
        }
    }
    return age+text;
}
