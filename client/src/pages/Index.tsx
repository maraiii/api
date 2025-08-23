import { useState, useMemo } from 'react';
import { SearchBar } from '../components/SearchBar';
import { ParticleGrid } from '../components/ParticleGrid';
import { koreanParticles } from '../data/particles';
import { Book, Target, Users } from 'lucide-react';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [difficulty, setDifficulty] = useState('all');
  const [category, setCategory] = useState('all');

  const filteredParticles = useMemo(() => {
    return koreanParticles.filter(particle => {
      const matchesSearch = 
        particle.particle.includes(searchTerm) ||
        particle.romanization.toLowerCase().includes(searchTerm.toLowerCase()) ||
        particle.meaning.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesDifficulty = difficulty === 'all' || particle.difficulty === difficulty;
      const matchesCategory = category === 'all' || particle.category === category;
      
      return matchesSearch && matchesDifficulty && matchesCategory;
    });
  }, [searchTerm, difficulty, category]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-korean-blue/5">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-korean-blue/20 via-korean-purple/10 to-transparent"
          style={{
            backgroundImage: `url(/images/korean-pattern.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(1px) brightness(0.7)'
          }}
        />
        <div className="relative container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 drop-shadow-lg">
            Hangul Particle Quest
          </h1>
          <p className="text-xl md:text-2xl text-foreground/90 mb-8 max-w-2xl mx-auto">
            Domine as partículas coreanas com exercícios interativos e explicações detalhadas
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-foreground/80">
            <div className="flex items-center gap-2">
              <Book className="h-6 w-6 text-korean-blue" />
              <span className="text-lg">8 Partículas</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="h-6 w-6 text-korean-orange" />
              <span className="text-lg">3 Níveis</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-6 w-6 text-korean-purple" />
              <span className="text-lg">Aprenda no seu ritmo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Explore as Partículas Coreanas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Clique em qualquer cartão para ver explicações detalhadas, exemplos e dicas de uso
          </p>
        </div>

        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          difficulty={difficulty}
          onDifficultyChange={setDifficulty}
          category={category}
          onCategoryChange={setCategory}
        />

        <div className="mb-6 text-center">
          <p className="text-muted-foreground">
            Mostrando {filteredParticles.length} de {koreanParticles.length} partículas
          </p>
        </div>

        <ParticleGrid particles={filteredParticles} />

        {filteredParticles.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Nenhuma partícula encontrada
            </h3>
            <p className="text-muted-foreground">
              Tente ajustar os filtros ou termos de busca
            </p>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-primary/5 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            Continue aprendendo coreano • 한국어 공부 화이팅!
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;