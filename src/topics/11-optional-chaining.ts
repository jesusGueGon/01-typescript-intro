export interface Passenger {

    name: string;
    children?: string[];

}

const passenger1: Passenger = {
    name: "Jesús",
}

const passenger2: Passenger = {
    name: "Jesús",
    children: ["Juan", "Manuel"],
}

const printChildren = (passenger: Passenger) => {

    const howManyChildren = passenger.children?.length || 0;

    console.log(passenger.name, howManyChildren);

}

printChildren(passenger2);

printChildren(passenger1);

