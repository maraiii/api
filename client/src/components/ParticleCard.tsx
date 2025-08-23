import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { KoreanParticle } from '../types/particles';
import { categoryColors, difficultyColors } from '../data/particles';
import { cn } from '../lib/utils';

interface ParticleCardProps {
  particle: KoreanParticle;
  onClick: (particle: KoreanParticle) => void;
}

export function ParticleCard({ particle, onClick }: ParticleCardProps) {
  const categoryColor = categoryColors[particle.category];
  const difficultyColor = difficultyColors[particle.difficulty];

  return (
    <Card 
      className={cn(
        "cursor-pointer transition-all duration-300 hover:scale-105",
        "bg-gradient-to-br from-card to-secondary/50",
        "shadow-card hover:shadow-card-hover",
        "border-0 hover:border-primary/20"
      )}
      onClick={() => onClick(particle)}
    >
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="text-3xl font-bold text-primary">
            {particle.particle}
          </div>
          <Badge className={`bg-${difficultyColor}/10 text-${difficultyColor} border-${difficultyColor}/20`}>
            {particle.difficulty}
          </Badge>
        </div>
        <div className="text-sm text-korean-gray font-medium">
          {particle.romanization}
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
          {particle.meaning}
        </p>
        <Badge className={`bg-${categoryColor}/5 text-${categoryColor} border-${categoryColor}/20`}>
          {particle.category}
        </Badge>
      </CardContent>
    </Card>
  );
}