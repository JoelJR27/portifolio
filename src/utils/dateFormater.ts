export default function dateFormater(date?: string | null) {
  if (!date) return null;

  return Intl.DateTimeFormat('pt-BR', {
    month: 'long',
    year: 'numeric'
  })
    .format(new Date(date))
    .replace(/^\w/, (c) => c.toUpperCase());

}
