import {
  BlueFacebook,
  BlueLinkedIn,
  BlueTelegram,
  BlueTwitter,
  BlueWhatsapp,
} from "@/assets/Icons/IconsSocialMedia";
import Image from "next/image";
import Link from "next/link";

import ImagemUser from '../../../assets/amigo.png'

export function ArtigoBody() {
  return (
    <div className="max-w-3xl mx-auto py-11 space-y-8 px-4">
      <div className="flex justify-between flex-wrap gap-4">
        <p className="text-sm">Publicado em 16/12/2022 16h30</p>
        <ul className="flex gap-4">
          <li>
            <Link href={""}>
              <BlueFacebook />
            </Link>
          </li>
          <li>
            <Link href={""}>
              <BlueTwitter />
            </Link>
          </li>
          <li>
            <Link href={""}>
              <BlueWhatsapp />
            </Link>
          </li>
          <li>
            <Link href={""}>
              <BlueTelegram />
            </Link>
          </li>
          <li>
            <Link href={""}>
              <BlueLinkedIn />
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-4">
        <Image src={ImagemUser} alt="Foto do usuario" className="rounded-full w-20" />
        <div className="font-bold">
          <p className="text-laranja-1">Escrito por</p>
          <p className="text-2xl">João da Silva</p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-5xl font-bold hidden sm:block">Lorem Ipsum is simply dummy text of the printing</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          vulputate iaculis felis, in luctus augue luctus nec. Etiam convallis
          fermentum mattis. Nullam quis nisi mauris. In viverra lectus sed nulla
          pharetra porta. Sed eu mollis nisi. Mauris ex lectus, congue at risus
          nec, interdum egestas velit. Sed pharetra, mi sit amet malesuada
          elementum, sem purus molestie est, nec bibendum odio lorem vitae erat.
          Nam dui augue, dignissim nec felis sed, ultrices euismod lectus. Etiam
          vel ipsum vitae metus bibendum hendrerit. Sed laoreet nisi at erat
          placerat scelerisque sit amet sit amet dui. Pellentesque congue
          tincidunt varius. Mauris eget velit mollis, luctus tortor vel, lacinia
          tellus. Ut porttitor, arcu rutrum scelerisque laoreet, tortor tortor
          vehicula risus, a tempus felis augue a nisl. Phasellus molestie
          laoreet interdum. Proin facilisis convallis mauris, nec condimentum
          urna hendrerit id. Morbi ut orci eget nisl accumsan elementum eget in
          mi. Maecenas finibus ullamcorper eros sit amet interdum. Integer vitae
          ipsum sapien. Nulla eu leo vehicula, cursus elit sit amet, imperdiet
          nunc. Morbi pharetra blandit odio, porta dictum est congue a.
          Phasellus ultricies ornare velit, ut porttitor augue rhoncus in.
          Maecenas ac tortor eget lacus aliquam lacinia. Nam luctus mi eget
          augue elementum, nec faucibus ipsum hendrerit. Quisque viverra dapibus
          diam, a facilisis ex ultrices sed. Aliquam interdum diam id tristique
          facilisis. Phasellus arcu felis, sodales id dignissim ac, varius eu
          neque. Quisque eu fermentum nisi. Quisque dapibus vel elit non
          venenatis. Pellentesque arcu lorem, molestie aliquet justo sed,
          finibus semper tortor. Sed iaculis pulvinar ante, ac lobortis dolor
          imperdiet quis. Praesent eu scelerisque orci. Nam dapibus, erat et
          elementum lobortis, est diam suscipit velit, sit amet ullamcorper ex
          augue cursus nisi. Nunc non egestas lacus. Quisque non est faucibus,
          gravida leo sed, luctus tortor. Aenean quis nunc vitae dui mattis
          consequat a vitae ante. Aenean in orci et sapien dictum aliquet.
          Praesent vulputate accumsan ex, et facilisis eros vulputate non.
          Aenean vel feugiat augue. Quisque euismod, eros eu mollis lacinia,
          justo felis sodales lorem, in tristique tellus ante eget nunc. Vivamus
          quis justo ultricies, pretium libero in, egestas augue. Fusce velit
          odio, tincidunt mattis fermentum in, sodales interdum sapien. Integer
          eleifend lorem nec sodales consectetur. Nullam imperdiet arcu sit amet
          lorem rhoncus, vel vulputate tellus mattis. Proin augue massa,
          imperdiet ut posuere quis, maximus viverra magna. Pellentesque at
          lorem nibh. Sed in scelerisque massa. Pellentesque aliquet velit sed
          elit auctor, nec consectetur risus consequat. Ut blandit urna vel
          lacus dictum dictum. Sed tincidunt eros at libero placerat gravida.
          Nullam felis magna, convallis luctus elit vel, mollis maximus nunc.
          Fusce eu nulla in libero tincidunt ullamcorper molestie auctor neque.
          Sed lobortis sit amet lacus a lacinia. Suspendisse potenti. Duis
          fringilla nibh eu sapien efficitur, quis tincidunt metus finibus.
          Maecenas laoreet tellus nec laoreet rutrum. Etiam vestibulum lacus vel
          nunc dictum molestie. In hac habitasse platea dictumst. Mauris
          pharetra nulla quis turpis porttitor lobortis vel eget justo. Aenean
          odio lorem, aliquam vel pellentesque eu, tempus a sem. Maecenas
          efficitur arcu sed dui pellentesque, ut blandit diam sagittis. Ut
          lacus nulla, pretium a diam nec, lacinia tristique lacus. Fusce porta
          elit sit amet nunc placerat scelerisque. In commodo arcu ac nulla
          tincidunt porta. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Mauris vulputate imperdiet augue, vel sodales dui euismod
          nec. Fusce vehicula gravida facilisis. Nam sit amet sagittis nibh. Nam
          eleifend ex vitae nisi molestie, non cursus sem efficitur. Maecenas
          velit magna, luctus ut nibh eu, vehicula auctor erat. Suspendisse
          fringilla ex quis ligula malesuada imperdiet. Duis sollicitudin varius
          ipsum, eget sagittis leo sagittis quis.
        </p>
      </div>
    </div>
  );
}
