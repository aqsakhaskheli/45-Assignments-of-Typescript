function describe_city(city: string, country: string = 'Pakistan'): void {
    console.log(`${city} is in ${country}`)
}

describe_city("Karachi"); // default city
describe_city("France", "Europe");
describe_city ("lahore", "Punjab");

