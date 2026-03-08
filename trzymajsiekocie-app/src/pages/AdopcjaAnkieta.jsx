import { useParams } from 'react-router-dom';
import kotyData from '../data/koty.json';
import AdoptionForm from '../components/Form';

export default function AdopcjaAnkieta() {
  const { id } = useParams();
  const kot = kotyData.koty.find(k => k.id === parseInt(id));
  return (
    <div>
      <section className="hero-gradient">
        <div className="section-container py-10 text-center">
          <span className="section-label">Adopcja</span>
          <h1 className="heading-page mb-2">Ankieta adopcyjna</h1>
          {kot && <p className="text-body text-lg">dla kota <span className="font-semibold text-gray-800">{kot.name}</span></p>}
        </div>
      </section>
      <AdoptionForm catName={kot ? kot.name : ''} />
    </div>
  );
}
