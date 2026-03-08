import { useParams } from 'react-router-dom';
import kotyData from '../data/koty.json';
import AdoptionForm from '../components/Form';

export default function AdopcjaAnkieta() {
  const { id } = useParams();
  const kot = kotyData.koty.find(k => k.id === parseInt(id));
  return (
    <div className="max-w-3xl mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Ankieta adopcyjna dla kota {kot ? kot.name : ''}</h1>
      <AdoptionForm catName={kot ? kot.name : ''} />
    </div>
  );
}
