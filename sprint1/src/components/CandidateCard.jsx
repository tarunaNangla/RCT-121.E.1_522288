import styles from "./CandidateCard.module.css";

function CandidateCard({
  createdAt:createdAt,
  name:name,
  avatar:avatar,
  rating:rating,
  salary:salary,
  title:title,
  company_name:company_name,
  id:id
}) {
  return (
    <div data-testid="candidate-container" className={styles.container}>
      <img alt="logo" width="100px" height="100px"  src={avatar}/>
      <div>
        <div>Name:{name}</div>
        <div>Title & Company Name :{title} & {title}</div>
      </div>
      <div>$ Salary {salary}</div>
    </div>
  );
}

export default CandidateCard;
