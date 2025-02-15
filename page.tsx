"use client"

import { useState } from "react"
import { ChevronLeft, Globe, PackageIcon, Play, TagIcon, UserIcon } from "lucide-react"
import { motion } from "framer-motion"
import { useCelebrity } from "./hooks/useCelebrity"
import {
  GlobalStyle,
  Container,
  Header,
  HeaderContent,
  Logo,
  Nav,
  NavLink,
  Button,
  Main,
  VideoPreview,
  VideoContent,
  VideoTitle,
  PlayButton,
  Sidebar,
  SidebarTitle,
  SidebarDescription,
  Section,
  SectionTitle,
  Grid,
  Card,
  CardImage,
  CardTitle,
  OfferCard,
  OfferImage,
  OfferInfo,
  OfferTitle,
  OfferDescription,
  OfferPrice,
  CreateButton,
} from "./components/StyledComponents"

export default function CampaignCreator() {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null)
  const [selectedOffers, setSelectedOffers] = useState<number[]>([])
  const [isHoveringPlay, setIsHoveringPlay] = useState(false)
  const { selectedCelebrity, handleSelectCelebrity } = useCelebrity()

  const toggleOffer = (index: number) => {
    setSelectedOffers((prev) => 
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    )
  }

  return (
    <>
      <GlobalStyle />
      <Header>
        <Container>
          <HeaderContent>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <Logo>LOREAL</Logo>
              <ChevronLeft size={16} color="#9ca3af" />
              <Nav>
                <NavLink>Home</NavLink>
                <span>/</span>
                <NavLink>Criação de Campanha</NavLink>
              </Nav>
            </div>
            <Button as="div" style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.5rem 1rem" }}>
              <Globe size={16} />
              BR
            </Button>
          </HeaderContent>
        </Container>
      </Header>

      <Container>
        <Main>
          <VideoPreview initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <VideoContent>
              <VideoTitle>
                TIM FIBRA
                <br />
                FIBRA MASTER
                <br />
                <span>100%</span>
              </VideoTitle>
            </VideoContent>
            <motion.div
              style={{
                position: "absolute",
                inset: 0,
                backgroundColor: "#2563eb",
                opacity: 0.2,
                zIndex: 0,
              }}
            />
            <PlayButton
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onHoverStart={() => setIsHoveringPlay(true)}
              onHoverEnd={() => setIsHoveringPlay(false)}
            >
              <motion.div
                animate={{
                  scale: isHoveringPlay ? [1, 1.2, 1] : 1,
                }}
                transition={{ duration: 1, repeat: isHoveringPlay ? Number.POSITIVE_INFINITY : 0 }}
              >
                <Play size={32} color="white" />
              </motion.div>
            </PlayButton>
          </VideoPreview>

          <Sidebar initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
            <SidebarTitle>
              <span>GEO</span>
              <span>FAST</span>
            </SidebarTitle>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 600, color: "#1f2937", marginBottom: "0.5rem" }}>
              Edite em tempo real
            </h2>
            <SidebarDescription>
              Use as informações abaixo para editar e visualizar as alterações instantaneamente em sua campanha.
            </SidebarDescription>

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
                    onClick={() => handleSelectCelebrity(i)}
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

            <Section>
              <SectionTitle>
                <PackageIcon size={20} />
                Produtos
              </SectionTitle>
              <Grid>
                {[1, 2, 3].map((i) => (
                  <Card
                    key={i}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedProduct(i)}
                    style={{
                      borderColor: selectedProduct === i ? "#3b82f6" : "#e5e7eb",
                      backgroundColor: selectedProduct === i ? "#eff6ff" : "white",
                    }}
                  >
                    <CardImage src="/placeholder.svg" alt="Product" />
                    <CardTitle>Protetor Solar Facial</CardTitle>
                  </Card>
                ))}
              </Grid>
            </Section>

            <Section>
              <SectionTitle>
                <TagIcon size={20} />
                Ofertas
              </SectionTitle>
              {[1, 2, 3].map((i) => (
                <OfferCard
                  key={i}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => toggleOffer(i)}
                  style={{
                    backgroundColor: selectedOffers.includes(i) ? "#eff6ff" : "transparent",
                    border: selectedOffers.includes(i) ? "1px solid #bfdbfe" : "none",
                  }}
                >
                  <OfferImage src="/placeholder.svg" alt="Product" />
                  <OfferInfo>
                    <OfferTitle>Protetor Solar Facial</OfferTitle>
                    <OfferDescription>Proteção completa</OfferDescription>
                  </OfferInfo>
                  <OfferPrice>R$ 19,99</OfferPrice>
                </OfferCard>
              ))}
            </Section>

            <CreateButton whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              Criar material
            </CreateButton>
          </Sidebar>
        </Main>
      </Container>
    </>
  )
}

