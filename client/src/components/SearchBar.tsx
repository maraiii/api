import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  difficulty: string;
  onDifficultyChange: (value: string) => void;
  category: string;
  onCategoryChange: (value: string) => void;
}

export function SearchBar({
  searchTerm,
  onSearchChange,
  difficulty,
  onDifficultyChange,
  category,
  onCategoryChange
}: SearchBarProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-korean-gray h-4 w-4" />
        <Input
          placeholder="Buscar partículas..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 bg-card border-primary/10 focus:border-primary/30"
        />
      </div>
      
      <Select value={difficulty} onValueChange={onDifficultyChange}>
        <SelectTrigger className="w-full md:w-48 bg-card border-primary/10">
          <SelectValue placeholder="Dificuldade" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todas</SelectItem>
          <SelectItem value="beginner">Iniciante</SelectItem>
          <SelectItem value="intermediate">Intermediário</SelectItem>
          <SelectItem value="advanced">Avançado</SelectItem>
        </SelectContent>
      </Select>

      <Select value={category} onValueChange={onCategoryChange}>
        <SelectTrigger className="w-full md:w-48 bg-card border-primary/10">
          <SelectValue placeholder="Categoria" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todas</SelectItem>
          <SelectItem value="subject">Sujeito</SelectItem>
          <SelectItem value="object">Objeto</SelectItem>
          <SelectItem value="topic">Tópico</SelectItem>
          <SelectItem value="location">Lugar</SelectItem>
          <SelectItem value="time">Tempo</SelectItem>
          <SelectItem value="possessive">Possessiva</SelectItem>
          <SelectItem value="conjunction">Conjunção</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}