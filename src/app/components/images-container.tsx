import Image from "next/image";

export const ImagesContainer = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <Image
        src="https://generated.vusercontent.net/placeholder.svg"
        width="300"
        height="300"
        alt="Cachorro 2D"
        className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
      />
      <div className="grid grid-cols-2 gap-4">
        <Image
          src="https://generated.vusercontent.net/placeholder.svg"
          width="200"
          height="200"
          alt="Produto 3D"
          className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
        />
        <Image
          src="https://generated.vusercontent.net/placeholder.svg"
          width="200"
          height="200"
          alt="Produto 3D"
          className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
        />
      </div>
    </div>
  );
};
