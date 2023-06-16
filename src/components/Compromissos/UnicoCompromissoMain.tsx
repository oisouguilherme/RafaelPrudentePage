import Image from "next/image";
import ImagemTrabalho from '../../assets/trabalho.png'

export function UnicoCompromissoMain(){
  return(
    <div className="max-w-4xl mx-auto py-16 px-4 space-y-8">
      <Image src={ImagemTrabalho}alt="Trabalho"/>
      <p className="md:px-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vulputate iaculis felis, in luctus augue luctus nec. Etiam convallis fermentum mattis. Nullam quis nisi mauris. In viverra lectus sed nulla pharetra porta. Sed eu mollis nisi. Mauris ex lectus, congue at risus nec, interdum egestas velit. Sed pharetra, mi sit amet malesuada elementum, sem purus molestie est, nec bibendum odio lorem vitae erat. Nam dui augue, dignissim nec felis sed, ultrices euismod lectus. Etiam vel ipsum vitae metus bibendum hendrerit. Sed laoreet nisi at erat placerat scelerisque sit amet sit amet dui. Pellentesque congue tincidunt varius. Mauris eget velit mollis, luctus tortor vel, lacinia tellus. Ut porttitor, arcu rutrum scelerisque laoreet, tortor tortor vehicula risus, a tempus felis augue a nisl</p>
      <h2 className="font-bold text-laranja-1 text-4xl">Principais projetos</h2>
    </div>
  )
}