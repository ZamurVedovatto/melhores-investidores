import cardLivroStyles from "./CardLivro.module.scss";

const CardLivro = (props) => {
  const { livro } = props;

  return (
    <div className={`${cardLivroStyles.cardlivroWrapper}`}>
      {livro && (
        <div className={`${cardLivroStyles.cardlivroContent}`}>
          <div className={`${cardLivroStyles.cardlivroContentTop}`}>
            <img className="uk-border-rounded" src={livro.img} alt="livro" />
            <div className={`${cardLivroStyles.cta}`}>
              <a
                href={livro.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${cardLivroStyles.livroCta} uk-button uk-button-default uk-width-1-1 uk-margin-small-bottom`}
              >
                Saiba mais
              </a>
            </div>
          </div>
          <div className={`${cardLivroStyles.cardlivroContentBottom}`}>
            <div className={`${cardLivroStyles.rightTop}`}>
              <span className={`${cardLivroStyles.livroTitle}`}>
                {livro.title}
              </span>
              <span className={`${cardLivroStyles.livroAuthor}`}>
                {livro.author}
              </span>
              <div className={`${cardLivroStyles.livroStars}`}>
                {livro.sections.map((section) => (
                  <span key={section}>{section}</span>
                ))}
              </div>
            </div>
            <div className={`${cardLivroStyles.rightCenter}`}>
              <span className={`${cardLivroStyles.livroDescription}`}>
                {livro.description}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardLivro;
