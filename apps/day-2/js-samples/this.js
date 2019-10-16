
const customer = {
  id: 10,
  name: 'Hari',
  place: 'Bengaluru',

  show: function () {
    // var self = this;

    setTimeout(() => {
      console.log('inside setTimeout callback:', this);
      this.place = 'Pune';

      console.log('place changed to Pune..')
    }, 3000);
    console.log(`id: ${this.id}, name: ${this.name}, place: ${this.place}`);
  }
};

customer.show();

function sayHello() {
  console.log('hi');
  console.log(this);
}

sayHello();
