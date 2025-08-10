interface SkillItemProps {
  name: string;
  level: number;
}

export function SkillItem({ name, level }: SkillItemProps) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-sm">
        <span>{name}</span>
        <span>{level}%</span>
      </div>
      <div className="h-2 bg-slate-600 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-blue-400 to-teal-400"
          style={{ width: `${level}%` }}
          aria-valuenow={level}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  );
}