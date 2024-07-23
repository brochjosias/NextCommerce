"use client"; // Permitir interações do usuário

import { ProductType } from "../../types/ProductType";
import Image from "next/image";
import { useState } from "react";

type ProductImageProps = {
  product: ProductType;
  fill?: boolean;
};

export default function ProductImage({ product, fill }: ProductImageProps) {
  const [loading, setLoading] = useState(true);
  return fill ? (
    <Image
      src={product.image}
      fill
      alt={product.name}
      // object-cover = adapta conforme o tamanho da imagem
      className={`object-cover ${
        loading
          ? "scale-110 blur-3xl grayscale"
          : "scale-100 blur-0 grayscale-0"
      }`}
      // onLoadingComplete = quando o React recebe a imagem e já carregou ele executa o que está dentro dele
      onLoadingComplete={() => setLoading(false)}
    />
  ) : (
    <Image
      src={product.image}
      width={400}
      height={700}
      alt={product.name}
      // object-cover = adapta conforme o tamanho da imagem
      className={`object-cover ${
        loading
          ? "scale-110 blur-3xl grayscale"
          : "scale-100 blur-0 grayscale-0"
      }`}
      // onLoadingComplete = quando o React recebe a imagem e já carregou ele executa o que está dentro dele
      onLoadingComplete={() => setLoading(false)}
    />
  );
}
