import { useState } from 'react';
import { ParticleCard } from './ParticleCard';
import { ParticleDetail } from './ParticleDetail';
import { KoreanParticle } from '@/types/particles';

interface ParticleGridProps {
  particles: KoreanParticle[];
}

export function ParticleGrid({ particles }: ParticleGridProps) {
  const [selectedParticle, setSelectedParticle] = useState<KoreanParticle | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {particles.map((particle) => (
          <ParticleCard
            key={particle.id}
            particle={particle}
            onClick={setSelectedParticle}
          />
        ))}
      </div>
      
      {selectedParticle && (
        <ParticleDetail 
          particle={selectedParticle} 
          onClose={() => setSelectedParticle(null)} 
        />
      )}
    </>
  );
}