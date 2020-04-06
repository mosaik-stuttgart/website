rich_content:
  -
    type: html
    html: | 
        '<main class="pt-8 md:pt-10 -mb-6 md:flex">
            <section id="karfreitag" class="md:w-1/2">
                <div class="max-w-lg mx-auto">
                <picture class="w-full block bg-gray-200 -mt-6">
                    <source type="image/webp" srcset="{{ glide src='/assets/images/karfreitag.jpg' w='800' q='80' fm='webp' }} 800w, {{ glide src='/assets/images/karfreitag.jpg' w='512' q='80' fm='webp' }} 512w" sizes="100%"/>
                    <source type="image/jpg" srcset="{{ glide src='/assets/images/karfreitag.jpg' w='800' q='80' }} 800w, {{ glide src='/assets/images/karfreitag.jpg' w='512' q='80' }} 512w" sizes="100%"/>
                    <img loading="lazy" src="{{ glide src='/assets/images/karfreitag.jpg' w='595' q='80'}}" class="w-full" alt="{{image | get:alt}}"/>
                </picture>
                <div class="mx-4" style="transform: translateY(-58px)">
                <h1 class="text-3xl text-center font-medium text-red-900 italic mb-6">Karfreitag</h1>
                <p>Haltet euch außerdem Karfreitag Nachmittag für ein weiteres Special frei, alle Infos kommen nächste Woche ✌🏼</p>
                <p>Wir werden gemeinsam Abendmal feiern</p>
                </div>
                </div>
            </section>
            <section id="ostern" class="py-6 md:w-1/2">
                <div class="p-4 max-w-lg mx-auto">
                <h1 class="font-serif leading-none font-extrabold text-5xl text-green-900">Oster- <br/>Gottesdienst</h1>
                <span class="text-green-900 text-xl mt-3 block">12. April 2020 - 11 Uhr </span>
                <p class="mt-8">Sei dabei bei unsererem diesjährigen Ostergottesdienst. An diesem Tag feiern wir das größte Ereignis der Menschheitsgeschichte. Durch Jesus’ Tod und Auferstehung zeigte Gott seine bedingunglose Liebe und bietet dir Versöhnung und Gerechtigkeit an. Durch Jesus dürfen wir Gott nahe sein.<br>Seine Aufopferung ist ein großes Geschenk, das wir mit einer großen Dankbarkeit an Ostern feiern möchten. <br></p><p class="mt-4">Schalte um 11 Uhr zu unserem Livestream ein. Dich erwartet eine lebensnahe Predigt, die die Botschaft von Ostern für dein Leben runterbricht. Außerdem wollen wir gemeinsam beten. Im Anschluss haben wir eine Playlist für dich, mit der du in eine Lobpreiszeit starten kannst.</p>
                <a class="button my-4 mr-2 px-5 py-1 leading-loose inline-block bg-green-900 text-lg font-medium no-underline text-green-100 rounded-px shadow-sm hover:cursor-pointer hover:bg-green-800 focus:outline-none focus:bg-green-800" target="_blank" href="/live">Zum Livestream</a>
                </div>
            </section>
        </main>
        <style>
            main {background-color: #F7F7F7}
            #ostern {
                background-image: linear-gradient(180deg, #F0FFF498 10%, #F0FFF4 40%), url("{{ glide src='/assets/images/crossroad_light.jpg' w='1024' q='80'}}");
                background-size: contain;
            }
        </style>'
title: Ostern
fieldset: default
template: plain
id: 3248737b-1e7a-40fd-bbcb-8c3d3bf122a7
is_hidden: true