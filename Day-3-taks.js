let xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();

// xhr.onload = function () {
//   if (xhr.status === 200) {
//     const data = JSON.parse(xhr.response);
//     console.log("Status Code:", xhr.status);
//     console.log("Countries in Asia:");

//     const countriesInAsia = data.filter((country) => country.region === "Asia");


//     for (let i = 0; i < countriesInAsia.length; i++) {
//       console.log(`
//         Name: ${countriesInAsia[i].name.common}
//         Region: ${countriesInAsia[i].region}
//         Subregion: ${countriesInAsia[i].subregion}
//         Population: ${countriesInAsia[i].population}
//       `);
//     }
//   } else {
//     console.error("Error");
//   }
// };

xhr.onload = function () {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.response);
      console.log("Status Code:", xhr.status);
  
      // Get all the countries from Asia continent/region using Filter function
      const countriesInAsia = data.filter((country) => country.region === "Asia");
  
      console.log("Countries in Asia:");
      countriesInAsia.forEach((country) => {
        console.log(`
          Name: ${country.name.common}
          Population: ${country.population}
        `);
      });
  
      // Get all the countries with a population of less than 2 lakhs using Filter function
      const countriesWithPopulationUnder2Lakhs = data.filter(
        (country) => country.population < 200000
      );
  
      console.log("Countries with a population under 2 lakhs:");
      countriesWithPopulationUnder2Lakhs.forEach((country) => {
        console.log(`
          Name: ${country.name.common}
          Region: ${country.region}
          Subregion: ${country.subregion}
          Population: ${country.population}
        `);
      });
  
      // Print the details of all countries using forEach function
      console.log("Details of all countries:");
      data.forEach((country) => {
        console.log(`
          Name: ${country.name.common}
          Capital: ${country.capital}
          Flag: ${country.flags.png}
        `);
      });
  
      // Print the total population of countries using reduce function
      const totalPopulation = data.reduce(
        (accumulator, country) => accumulator + country.population,
        0
      );
      console.log("Total population of countries:", totalPopulation);
  
      // Print the country which uses US Dollars as currency
      const countryUsingUSD = data.find((country) =>
        country.currencies.hasOwnProperty("USD")
      );
  
      console.log("Country using US Dollars:", countryUsingUSD.name.common);
    } else {
      console.error("Error");
    }
  };
  