import { useState } from "react"
import { supabase } from '../lib/supabase'

export function useCelebrity() {
  const [selectedCelebrity, setSelectedCelebrity] = useState<number | null>(null)

  const handleSelectCelebrity = async (i: number) => {
    try {
      console.log('Iniciando seleção de celebridade:', i)
      
      setSelectedCelebrity(i)
      console.log('Estado local atualizado:', i)

      const celebrityData = {
        id: i,
        name: 'Anjou Dorigon',
        selected_at: new Date().toISOString(),
        campaign_id: 1
      }
      console.log('Dados preparados para inserção:', celebrityData)

      const { data, error } = await supabase
        .from('celebrities')
        .insert([celebrityData])

      if (error) {
        console.error('Erro ao salvar celebridade:', error)
        console.error('Detalhes do erro:', {
          código: error.code,
          mensagem: error.message,
          detalhes: error.details
        })
        return
      }

      console.log('Resposta da API:', data)
      console.log('Celebridade salva com sucesso! ID:', i)
    } catch (error) {
      console.error('Erro inesperado ao processar:', error)
      console.error('Stack trace:', error instanceof Error ? error.stack : 'Erro desconhecido')
    }
  }

  return {
    selectedCelebrity,
    handleSelectCelebrity
  }
} 