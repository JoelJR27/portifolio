export default function dateFormater(date: string) {
  const formatedDate = Intl.DateTimeFormat('pt-BR', {
    month: 'long',
    year: 'numeric'
  })
    .format(new Date(date))
    .replace(/^\w/, (c) => c.toUpperCase());

  return formatedDate;
}
