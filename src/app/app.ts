import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
})
export class App {
  protected readonly year = new Date().getFullYear();
  protected readonly cref = 'CREF 146028-G/SP';

  /** Atualize com o número real (DDI + DDD + número, só dígitos) */
  protected readonly whatsappUrl = 'https://wa.me/5511999999999';
  /** Atualize com o @ do Instagram */
  protected readonly instagramUrl = 'https://instagram.com/gilbertosantiagopersonal';

  protected readonly trustItems = [
    { label: this.cref },
    { label: 'Treinos personalizados' },
    { label: 'Acompanhamento individual' },
  ];

  protected readonly pillars = [
    {
      title: 'Hipertrofia muscular',
      description:
        'Treinos estruturados para desenvolvimento muscular com foco em evolução constante.',
      icon: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z',
    },
    {
      title: 'Progressão de cargas',
      description:
        'Método planejado para aumentar desempenho, força e construção muscular com segurança.',
      icon: 'M2.25 18 9 11.25l4.306 4.307a11.95 11.95 0 0 1 5.814-5.518L21.75 9M21.75 9l-5.94-2.28m5.94 2.28-2.28 5.94',
    },
    {
      title: 'Técnica e execução',
      description:
        'Correção postural e acompanhamento para melhorar performance e evitar erros na execução.',
      icon: 'M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
    },
    {
      title: 'Disciplina e propósito',
      description:
        'Acredito que constância, fé e dedicação são pilares para alcançar resultados duradouros.',
      icon: 'M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0a9.97 9.97 0 0 1-.939-1.75M8.25 6.75V4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V6.75m0 0H9.75m0 0h4.5',
    },
  ];

  protected readonly steps = [
    {
      number: '1',
      title: 'Avaliação inicial',
      description:
        'Análise dos seus objetivos, rotina, limitações e nível atual dentro da musculação.',
    },
    {
      number: '2',
      title: 'Treino personalizado',
      description:
        'Montagem estratégica do treino com foco em hipertrofia, desempenho e evolução progressiva.',
    },
    {
      number: '3',
      title: 'Correções e ajustes',
      description:
        'Acompanhamento contínuo para melhorar execução, intensidade e resultados.',
    },
    {
      number: '4',
      title: 'Evolução constante',
      description:
        'Seu treino evolui junto com seu desempenho para evitar estagnação e acelerar resultados.',
    },
  ];

  protected readonly audience = [
    'Para quem quer ganhar massa muscular com estratégia',
    'Para iniciantes que precisam de direção correta',
    'Para alunos que treinam sem evoluir',
    'Para quem busca treinos personalizados e acompanhamento profissional',
    'Para quem quer melhorar físico, disciplina e performance',
  ];

  protected readonly benefits = [
    {
      text: 'Treinos com foco em hipertrofia',
      icon: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z',
    },
    {
      text: 'Evolução com progressão de cargas',
      icon: 'M2.25 18 9 11.25l4.306 4.307a11.95 11.95 0 0 1 5.814-5.518L21.75 9M21.75 9l-5.94-2.28m5.94 2.28-2.28 5.94',
    },
    {
      text: 'Desenvolvimento muscular com técnica',
      icon: 'M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84',
    },
    {
      text: 'Mais performance e consistência nos treinos',
      icon: 'M15.362 5.214A8.252 8.252 0 0 1 12 21.75a8.25 8.25 0 0 1-6.037-13.536 8.25 8.25 0 0 1 9.326-13.536Z',
    },
    {
      text: 'Disciplina, propósito e comprometimento',
      icon: 'M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0a9.97 9.97 0 0 1-.939-1.75M8.25 6.75V4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V6.75m0 0H9.75m0 0h4.5',
    },
  ];
}
