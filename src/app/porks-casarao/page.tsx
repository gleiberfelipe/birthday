import Image from "next/image";
import "./style.css";

export default function ContatoPage() {
  return (
    <main>
      <div className=" header">
        <Image src="/porks.jpeg" alt="porks" width={500} height={300} />
        <h1> Porks Casarao</h1>
        <p>
          Av. Alvares Cabral <br></br>
          534, Lourdes
        </p>
      </div>
      <div className="cardapio">
        <Image
          src="/5955578.jpg"
          alt="porks"
          width={550}
          height={250}
          className="image"
        />
        <h2>Cardapio</h2>
      </div>

      <div className="menu">
        <Image
          src="/1.jpg"
          alt="porks"
          width={150}
          height={300}
          className="image"
        />
        <Image
          src="/2.jpg"
          alt="porks"
          width={150}
          height={300}
          className="image"
        />
        <Image
          src="/3.jpg"
          alt="porks"
          width={150}
          height={300}
          className="image"
        />
        <Image
          src="/4.jpg"
          alt="porks"
          width={150}
          height={300}
          className="image"
        />
        <Image
          src="/5.jpg"
          alt="porks"
          width={150}
          height={300}
          className="image"
        />
        <Image
          src="/6.jpg"
          alt="porks"
          width={150}
          height={300}
          className="image"
        />
        <Image
          src="/7.jpg"
          alt="porks"
          width={150}
          height={300}
          className="image"
        />
        <Image
          src="/8.jpg"
          alt="porks"
          width={150}
          height={300}
          className="image"
        />
        <Image
          src="/9.jpg"
          alt="porks"
          width={150}
          height={300}
          className="image"
        />
      </div>
    </main>
  );
}
