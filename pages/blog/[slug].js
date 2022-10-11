import { useRouter } from 'next/router';
import styles from '../../styles/BlogPost.module.css';

const Slug = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2 className={styles.title}>Title: {slug}</h2>
        <div className={styles.blogItem}>
          <p>
            JavaScript is the language used to design logic for the web Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Nisi officia
            possimus dicta molestiae placeat repellendus ipsum natus incidunt, a
            esse perspiciatis dolore omnis velit inventore dolor eius beatae
            aspernatur magnam? Beatae ut et dolorem vitae quisquam nam, veniam
            quo, porro nostrum accusantium molestiae nisi iusto? Quis
            consequatur neque maxime natus harum, ad accusamus rem. Fugiat ut
            earum rerum sint in. Quaerat in facilis voluptates deleniti vitae
            nam veritatis eius suscipit aperiam! Sed praesentium quae alias enim
            ipsum? Natus velit quod odio doloribus perferendis! Dicta illum
            ratione error dolor, labore et! Tenetur, recusandae. Porro
            consequatur quia cum perspiciatis. Dicta perspiciatis voluptates
            consequatur iusto corrupti accusamus labore distinctio assumenda
            quasi facilis numquam quia repudiandae harum ut saepe, voluptate
            fuga? Necessitatibus, repudiandae voluptas! Placeat quo iusto nam
            exercitationem sequi expedita cupiditate voluptatum consectetur
            suscipit dolore repudiandae quod quos, velit ullam aut veniam
            veritatis molestiae! Neque reiciendis nisi nihil explicabo aliquam
            porro! Ullam, atque! Exercitationem deserunt, culpa voluptates error
            obcaecati magni delectus atque tempora laboriosam molestias iure
            esse non fugit quos animi beatae! Saepe corrupti cum facere omnis,
            nam nemo enim dicta eos velit? Iusto vel velit tempora assumenda.
            Harum ullam amet cum voluptatibus, esse, molestiae voluptates eaque
            quidem nesciunt id officiis, sapiente beatae modi reiciendis fugit?
            Ad quasi nobis quis iure dolorem enim. Accusantium molestiae
            temporibus optio cum nemo esse fugit totam voluptate aliquid
            obcaecati alias iure nostrum odit nesciunt aliquam harum ea atque,
            commodi earum. Velit eligendi recusandae rerum laboriosam illo
            fugiat. Ut dolores placeat nulla nam, iste cum esse deleniti natus
            explicabo nesciunt distinctio quisquam doloremque nostrum cumque
            dolore. Quia rerum numquam alias eos vitae! Ipsum consequatur
            maiores quo officia cumque? Consectetur provident autem nam
            reprehenderit, animi voluptatibus magni quisquam ut repellendus
            quasi sapiente est eius unde voluptas, recusandae numquam. Aperiam
            laborum asperiores quas, placeat dolore dolores maiores corporis
            nisi quisquam. Aperiam laboriosam dolore et excepturi libero fugiat
            nisi dolor labore sed autem impedit consequuntur, minima esse.
            Perferendis voluptatum molestiae excepturi incidunt eos atque modi
            nam, hic totam soluta cumque alias! Eligendi atque corporis officiis
            similique cumque saepe nisi molestiae nulla. Sapiente atque natus
            soluta quibusdam quo repudiandae modi amet velit eveniet beatae,
            officiis, voluptate nemo error asperiores nihil. Perferendis,
            asperiores! Maxime rerum, corporis adipisci odit error officiis nemo
            cumque in incidunt magnam odio omnis placeat quo, accusamus,
            perspiciatis aspernatur nostrum modi quaerat voluptatum? Temporibus
            modi alias esse magni consectetur! Inventore. Corrupti, voluptatum
            dolorem adipisci eius architecto mollitia qui facere. Animi,
            asperiores omnis? Quam officia perferendis, commodi laborum harum
            error id perspiciatis expedita mollitia blanditiis dolore ab
            voluptatem, doloribus sapiente velit? Animi, tempora? Impedit
            reprehenderit eius, quos commodi esse possimus voluptates fugiat
            consectetur inventore vero odio consequuntur voluptatibus, labore
            cumque aperiam, iusto reiciendis. Ipsa doloribus, facere ex
            necessitatibus illum odio nulla. Deserunt provident illum nulla
            praesentium, quis perspiciatis tempore ratione, molestias sunt
            impedit quos optio cumque minus, saepe corporis eos repellat.
            Consectetur sunt sit velit minima labore ratione, fugiat tenetur
            voluptatibus. Omnis nobis eligendi assumenda, consequatur porro,
            perspiciatis dolorem eum earum molestias ratione laudantium
            reiciendis praesentium fugiat. Explicabo animi minima eius quos
            exercitationem in dignissimos, ipsam, velit labore soluta beatae
            voluptate. Quisquam atque itaque nemo facilis, rem adipisci
            molestiae sunt architecto molestias perspiciatis. Rerum soluta
            blanditiis aliquid consectetur quis voluptatum neque ipsa numquam!
            Eius, consequatur sequi ipsum deleniti rem incidunt illo. Enim
            doloremque eveniet qui numquam harum ad dolorem quaerat maxime
            officiis beatae voluptatum reiciendis vero magnam, sint, quae
            veritatis consequuntur repellendus neque cumque saepe. Veritatis
            tempora nisi commodi magnam. Possimus! Iusto quis ipsa, rem corrupti
            vel ex commodi, tempora nihil id molestias provident asperiores
            necessitatibus quos adipisci. Amet eum assumenda provident nemo
            optio ex expedita exercitationem reiciendis, cumque obcaecati
            distinctio.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Slug;
