import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export type FAQ = { q: string; a: string };

export function FAQList({ items }: { items: FAQ[] }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item, i) => (
        <AccordionItem key={i} value={`item-${i}`} className="border-gold/40">
          <AccordionTrigger className="text-left font-display text-lg text-secondary hover:no-underline">
            {item.q}
          </AccordionTrigger>
          <AccordionContent className="text-base text-muted-foreground">
            {item.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
