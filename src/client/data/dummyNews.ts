export interface NewsItem {
  id: string
  tag: string
  date: string
  title: string
}

export const dummyNews: NewsItem[] = [
  {
    id: 'n1',
    tag: 'Media',
    date: '28 Okt 2026',
    title: 'Pertumbuhan transaksi fintech lending tumbuh 18% secara tahunan',
  },
  {
    id: 'n2',
    tag: 'Siaran Pers',
    date: '21 Okt 2026',
    title: 'Kolaborasi penyedia layanan untuk perluasan inklusi keuangan digital',
  },
  {
    id: 'n3',
    tag: 'Media',
    date: '12 Okt 2026',
    title: 'Edukasi literasi keuangan digital menyasar pelaku UMKM di 12 kota',
  },
]
