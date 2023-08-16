import Button from '../Components/Button.jsx';
import PricingContainer from '../Components/PricingContainer.jsx';
import Text from '../Components/Text.jsx';
const Pricing = () => {
  return (
    <div className="flex flex-col justify-center gap-8 items-center m-10">
      <div className="flex lg:flex-row flex-col justify-center gap-8 items-center mb-5">
        <PricingContainer title="Cours particuliers" price="30€">
          Aide aux devoirs ou révisions des notions dont il a besoin.
          Renforcement des clés et outils utilisés avec ses spécialistes:
          travail sur sa graphie, développement de la motricité, travail de
          mémoire, utilisation de l&apos;ordinateur, etc.
        </PricingContainer>
        <PricingContainer title="Enfant Déscolarisé" price="240€">
          Votre enfant est déscolarisé, il a besoin d&apos;un jour par semaine
          pour revoir les notions apprises la semaine dernière, être certain
          qu&apos;il a tous les outils en mains pour maitriser le plus possible
          les notions. Le tarif comprend quatre journées dans le mois à raison
          d&apos;une journée par semaine. Nous voyons ensemble en amont le
          programme de la journée afin que le temps soit optimisé un maximum.
        </PricingContainer>
        <PricingContainer title="Stage d'Eté" price="240€">
          Entre amis ou seul, votre enfant participe à une semaine de révisions
          approfondies durant l&apos;été afin d&apos;avoir tous les outils pour
          sa rentrée scolaire dans la classe supérieure. Le choix du groupe
          permet également de tenir compte de l&apos;aspect social de
          l&apos;enfant ainsi que de travailler sur l&apos;entraide qui est un
          outil non négligeable. Les enfants auront tous le même niveau
          (scolaire).
        </PricingContainer>
        <PricingContainer title="Stage Préparation DNB" price="Nous Contacter">
          Ce stage d&apos;une semaine avec quatre ou cinq heures par jour (selon
          son choix) lui permet de se préparer le plus possible aux épreuves. Il
          est possible de ne travailler que sur une matière ou faire un travail
          plus large(à voir selon ses besoins). Ce stage lui permettra
          d&apos;acquérir la notion de temps, de faire un travail en sur les
          émotions que les épreuves pourraient occasionner, trouver des moyens
          et outils afin de l&apos;aider au mieux pour ce moment. Nous ferons
          également des sujets de DNB.
        </PricingContainer>
      </div>
      <Button className="">Réserver</Button>
      <div className="flex lg:w-[70%] justify-center  items-center">
        <Text>
          L&apos;entreprise se réserve le droit de modifier unilatéralement les
          prix de son offre à tout moment, notamment en cas d&apos;augmentation
          des coûts, étant entendu que, en cas d&apos;augmentation des prix
          postérieure à l&apos;acceptation de l&apos;offre, seul le prix fixé au
          jour de cette acceptation sera applicable au client.
        </Text>
      </div>
    </div>
  );
};

export default Pricing;
