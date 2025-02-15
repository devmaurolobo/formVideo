import { UserIcon } from "lucide-react"
import { Section, SectionTitle, Grid, Card, CardImage, CardTitle } from "./StyledComponents"

type CelebritySectionProps = {
  selectedCelebrity: number | null
  onSelectCelebrity: (i: number) => void
}

export function CelebritySection({ selectedCelebrity, onSelectCelebrity }: CelebritySectionProps) {
  return (
    <Section>
      <SectionTitle>
        <UserIcon size={20} />
        Celebridade
      </SectionTitle>
      <Grid>
        {[1, 2, 3].map((i) => (
          <Card
            key={i}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelectCelebrity(i)}
            style={{
              borderColor: selectedCelebrity === i ? "#3b82f6" : "#e5e7eb",
              backgroundColor: selectedCelebrity === i ? "#eff6ff" : "white",
            }}
          >
            <CardImage src="/placeholder.svg" alt="Celebrity" />
            <CardTitle>Anjou Dorigon</CardTitle>
          </Card>
        ))}
      </Grid>
    </Section>
  )
} 