export function Portfolio_card({
  image,
  card_title,
  card_subtitle_1,
  card_subtitle_2,
  card_subtitle_3,
}) {
  return (
    <div className="test position-relative pt-5">
      <img src={image} className="port_image position-relative z-1" alt="" />
      <p className="card_title hover_effect z-3  position-absolute font_size_24 font-weight-600 text-white line_height_28">
        {card_title}
      </p>
      <div className="card_subtitle hover_effect position-absolute z-3 gap-2 d-flex">
        <button className="font_size_10 font-weight-400 bg-white border-0 px-4 py-1 rounded-pill">
          {card_subtitle_1}
        </button>
        <button className="font_size_10 font-weight-400 bg-white border-0 px-4 py-1 rounded-pill">
          {card_subtitle_2}
        </button>
        <button className="font_size_10 font-weight-400 bg-white border-0 px-4 py-1 rounded-pill">
          {card_subtitle_3}
        </button>
      </div>
    </div>
  );
}
