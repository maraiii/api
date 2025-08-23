import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { KoreanParticle } from '@/types/particles';
import { categoryColors, difficultyColors } from '@/data/particles';

interface ParticleDetailProps {
  particle: KoreanParticle;
  onClose: () => void;
}

export function ParticleDetail({ particle, onClose }: ParticleDetailProps) {
  const categoryColor = categoryColors[particle.category];
  const difficultyColor = difficultyColors[particle.difficulty];

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-card to-secondary/30">
        <DialogHeader className="text-center pb-4">
          <DialogTitle className="text-4xl font-bold text-primary mb-2">
            {particle.particle}
          </DialogTitle>
          <div className="text-lg text-korean-gray font-medium mb-4">
            {particle.romanization}
          </div>
          <div className="flex justify-center gap-2">
            <Badge  className={`bg-${difficultyColor}/10 text-${difficultyColor} border-${difficultyColor}/20`}>
              {particle.difficulty}
            </Badge>
            <Badge  className={`bg-${categoryColor}/5 text-${categoryColor} border-${categoryColor}/20`}>
              {particle.category}
            </Badge>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          <Card className="border-primary/10">
            <CardHeader>
              <CardTitle className="text-lg text-primary">Significado</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground">{particle.meaning}</p>
            </CardContent>
          </Card>

          <Card className="border-primary/10">
            <CardHeader>
              <CardTitle className="text-lg text-primary">Como Usar</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground">{particle.usage}</p>
            </CardContent>
          </Card>

          <Card className="border-primary/10">
            <CardHeader>
              <CardTitle className="text-lg text-primary">Exemplos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {particle.examples.map((example, index) => (
                <div key={index} className="p-4 bg-secondary/30 rounded-lg border border-primary/5">
                  <div className="text-xl font-bold text-primary mb-1">
                    {example.korean}
                  </div>
                  <div className="text-sm text-korean-gray mb-2">
                    {example.romanization}
                  </div>
                  <div className="text-foreground">
                    {example.portuguese}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
}