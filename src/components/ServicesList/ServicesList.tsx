import ServiceCard, { ServiceCardProps } from '../ServiceCard/ServiceCard';
import styles from './ServicesList.module.css';

export default function ServicesList({ servicesList }: { servicesList: ServiceCardProps[] }) {
  return (
    <ul className={styles.list}>
      {servicesList &&
        servicesList.length > 0 &&
        servicesList.map((service) => {
          return (
            <li key={service.id}>
              <ServiceCard serviceCard={service} />
            </li>
          );
        })}
    </ul>
  );
}
