import styles from './ServiceCard.module.css';

export interface ServiceCardProps {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
}

export default function ServiceCard({ serviceCard }: { serviceCard: ServiceCardProps }) {
  return (
    <div className={styles.card}>
      <img className={styles.cardImage} src={serviceCard.imageUrl} alt={serviceCard.title} />
      <h3 className={styles.cardTitle}>{serviceCard.title}</h3>
      <div className={styles.cardDivider}></div>
      <p className={styles.cardDescription}>{serviceCard.description}</p>
    </div>
  );
}
