import { gridItems } from "@/data"
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid"

//import React from 'react';
const Grid = () => {
  return (
    <section id="about" className="w-full">
        <BentoGrid>
            {gridItems.map(({id, title, description, className, img, imgClassName, spareImg, titleClassName}) => (
                <BentoGridItem 
                id={id}
                key={id}
                title={title}
                description={description}
                className={className}
                img={img}
                imgClassName={imgClassName}
                titleClassName={titleClassName}
                spareImg={spareImg}
                />
            ))}
        </BentoGrid>
    </section>
  )
}

export default Grid