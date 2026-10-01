const en = {
  notFound: 'Page not found',
  unexpected: 'Something went wrong',
  backHome: 'Go to home page',
};

const fr = {
  notFound: 'Page introuvable',
  unexpected: "Une erreur s'est produite",
  backHome: "Retour à l'accueil",
} satisfies typeof en;

export const errorsTranslations = {
  en,
  fr,
};
