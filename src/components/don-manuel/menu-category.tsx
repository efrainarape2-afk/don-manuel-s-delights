import { Card, CardContent } from "@/components/ui/card";

type MenuCategoryProps = {
  category: string;
  items: string[];
};

export function MenuCategory({ category, items }: MenuCategoryProps) {
  return (
    <Card className="menu-panel border-border/60 bg-card/90">
      <CardContent className="p-5 md:p-6">
        <div className="mb-4 flex items-center justify-between gap-3">
          <h3 className="font-display text-2xl text-foreground">{category}</h3>
          <span className="menu-chip">{items.length} opciones</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {items.map((item) => (
            <span key={item} className="menu-item-pill">
              {item}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
