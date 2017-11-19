export class CarrsService {
  cars = [
    {name: 'Ford', year: 2015, isSold:false},
    {name: 'Audi', year: 2013, isSold:false},
    {name: 'BMW', year: 2015, isSold:true},
    {name: 'MAN', year: 2016, isSold:true},
    {name: 'Mazda', year: 2017, isSold:false}
  ];

  addCar(name: string){
    this.cars.push({
      name: name,
      year: 2017,
      isSold: false
    });
  }
}
