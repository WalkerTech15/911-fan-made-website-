/* Page behavior is kept separate from content and styling. */
(() => {
  const crewContainer = document.querySelector("#crew-cards");
  const crew = window.STATION_118_CREW;

  if (!crewContainer || !Array.isArray(crew)) return;

  const createCard = (member) => {
    const article = document.createElement("article");
    article.className = "card";

    const number = document.createElement("span");
    number.className = "card-num";
    number.textContent = `${member.number} / ${member.category}`;

    const figure = document.createElement("figure");
    figure.className = "card-photo";
    const image = document.createElement("img");
    image.src = member.image;
    image.alt = member.imageAlt;
    image.loading = "lazy";
    image.referrerPolicy = "no-referrer";

    const caption = document.createElement("figcaption");
    caption.append(document.createTextNode(member.actor));
    const source = document.createElement("a");
    source.href = member.sourceUrl;
    source.target = "_blank";
    source.rel = "noreferrer";
    source.textContent = member.sourceLabel;
    caption.append(source);
    figure.append(image, caption);

    const details = document.createElement("div");
    const role = document.createElement("div");
    role.className = "card-role";
    role.textContent = member.role;
    const title = document.createElement("h3");
    title.textContent = member.character;
    const description = document.createElement("p");
    description.textContent = member.description;
    details.append(role, title, description);

    article.append(number, figure, details);
    return article;
  };

  crewContainer.replaceChildren(...crew.map(createCard));
})();
