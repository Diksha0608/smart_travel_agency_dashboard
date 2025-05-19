import React from 'react';
import { Header } from '../../../components';
import { ComboBoxComponent } from '@syncfusion/ej2-react-dropdowns';
import type {Route} from './+types/create-trip';

export const loader = async () => {
  const response = await fetch('https://restcountries.com/v3.1/all');
  const data = await response.json();

  return data.map((country: any) => ({
    name: country.flag + country.name.common,
    coordinates: country.latlng,
    value: country.name.common,
    openStreetMap: country.maps?.openStreetMap,
  }))
}

const CreateTrip = ({ loaderData }: Route.ComponentProps ) => {
  const countries = loaderData as Country[];
  console.log(countries)

  const countryData = countries.map((country:Country) => ({
    text: country.name,
    value:country.name
  }))

  const handleChange = () => {

  }

  const handleSubmit = async(e:React.FormEvent<HTMLFormElement>) => {
  }

  console.log(countries)

  return (
    <main className="flex flex-col gap-10 pb-20 wrapper">
<Header title="add a new trip" description="View and edit AI-generated travel plans" />
      <section className="mt-2.5 wrapper-md">
        <form className="trip-form" onSubmit={handleSubmit}>
<div>
  <label htmlFor="country">Country</label>
 <ComboBoxComponent
   id="country"
   dataSource={countryData}
   fields = {{text:'text',value:'value'}}
   placeholder="select a country"
   className="combo-box"
   change = {(e: {value: string | undefined}) => {
     if (e.value) {
       handleChange('country', e.value)
     }
   }}
   allowFiltering
   filtering = { (e) => {
     const query = e.text.tolowerCase();

     e.updateData(countries.filter((country)=>
     country.name.toLowerCase().includes(query)).map(((country) => ({
       text:country.name,
       value:country.name
       })))
     );
   }}

 />
</div>
        </form>

      </section>
    </main>
  );
};
export default CreateTrip;
