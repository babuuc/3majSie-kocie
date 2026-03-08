import { useParams } from 'react-router-dom';
import kotyData from '../data/koty.json';
import AdoptionForm from '../components/Form';

export default function AdopcjaAnkieta() {
  const { id } = useParams();
  const kot = kotyData.koty.find(k => k.id === parseInt(id));
  return <AdoptionForm catName={kot ? kot.name : ''} />;
}
