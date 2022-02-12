import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Blog = () => {
  return(
    <section className="py-12 sm:py-16 ">
        <div className="max-w-7xl px-10 mx-auto sm:text-center bg-gradient-to-b from-gray-300 to-cyan-100 rounded-md p-2">
         
          <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl mt-3 text-pink">My Photo Blog</h2>
          <p className="mt-4 text-gray-500 text-base sm:text-xl lg:text-2xl">Pictures saved our memories <span className="animate-bounce">👇</span><span className="animate-[wiggle_1s_ease-in-out_infinite]">📸</span></p>
          <hr clas/>
                        <div class="carousel-wrapper mt-5 max-w-2xl mx-auto mb-11 shadow-slate-50">
                            
                            <Carousel infiniteLoop useKeyboardArrows autoPlay>
                                <div>
                                    <img src="https://scontent.fkix2-2.fna.fbcdn.net/v/t1.18169-9/15032211_994785110633742_1154421941430800174_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=-thfLGu8wIYAX9UPIA7&_nc_ht=scontent.fkix2-2.fna&oh=00_AT8hIDOd9b84kOcI5RFoYpvAbltIKEt5CHQtH39nKGBePw&oe=622CA01B" />
                                </div>
                                <div>
                                    <img src="https://scontent-nrt1-1.xx.fbcdn.net/v/t31.18172-8/14207600_745327568941344_3953274099230023908_o.jpg?_nc_cat=111&ccb=1-5&_nc_sid=19026a&_nc_ohc=VJT5FqRdnx8AX_pT5ga&_nc_ht=scontent-nrt1-1.xx&oh=00_AT9ZxqwA1vwYa1eVuqI5svEGYW9Lr6BhaRFbTpRrz3kruw&oe=622B63BE" />
                                </div>
                                <div>
                                    <img src="https://scontent-nrt1-1.xx.fbcdn.net/v/t1.18169-9/1384021_547996405274148_956305164_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=2c4854&_nc_ohc=mqhpZo6osyAAX9FtAR9&_nc_ht=scontent-nrt1-1.xx&oh=00_AT-gmPDJkVOsV8gdP0shrttTc3okLkZ5HHIc4WeSm8hcjQ&oe=622BAE1C" />
                                </div>
                                <div>
                                    <img src=" https://scontent.fkix2-2.fna.fbcdn.net/v/t31.18172-8/13246363_690868201053948_2320897843240699858_o.jpg?_nc_cat=100&ccb=1-5&_nc_sid=19026a&_nc_ohc=sQW8_M1OF-UAX9YP7Jg&tn=-uZLfwQF3R5vXgOe&_nc_ht=scontent.fkix2-2.fna&oh=00_AT_0fOvIhTtGDCgTv2xtWbkv5aBzMVX7t5AnYPHX4TFCwA&oe=622DA1EF" />
                                </div>
                               
                            </Carousel>
                            <h2 className="text-3xl lg:text-4xl tracking-tight font-semibold leading-8 lg:leading-9 text-gray-800 dark:text-white dark:text-white">Kien in highschool</h2>
                        </div>
                        <hr className="text-bold text-black"/>
                        <hr clas/>
                        <div class="carousel-wrapper mt-5 max-w-2xl mx-auto mb-11">
                            
                            <Carousel infiniteLoop useKeyboardArrows autoPlay>
                                <div>
                                    <img className=""src="https://scontent.fkix2-1.fna.fbcdn.net/v/t1.6435-9/69669876_2376305632587603_4332288908239831040_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=0debeb&_nc_ohc=-IX5Wl8Zu3wAX81hjzZ&_nc_oc=AQn0CtL0EnHqEdadeM3XSPSXT6ifHD8T1ObzNG6IfVYbbJCIMYcH3It7y-yVQ088Lxc&tn=-uZLfwQF3R5vXgOe&_nc_ht=scontent.fkix2-1.fna&oh=00_AT8cqyAcM_PmhNvwZb6Sd9EPHSPiuzIzZuF5RGu6sNEkIg&oe=622B8905" />
                                </div>
                                <div>
                                    <img src="https://scontent.fkix2-2.fna.fbcdn.net/v/t1.6435-9/69676506_2376305915920908_7952130140362768384_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=0debeb&_nc_ohc=Ae9oxqBeqbcAX9HASpG&_nc_ht=scontent.fkix2-2.fna&oh=00_AT905d0ZrDPRSx3Rz3TyxNcy0fSo8_oiifprvtSM56bf5A&oe=62290E98" />
                                </div>
                                <div>
                                    <img src="https://scontent-nrt1-1.xx.fbcdn.net/v/t1.6435-9/70428614_2376306615920838_6549398090686660608_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=0debeb&_nc_ohc=qDTvtYanwU8AX_AMufx&_nc_ht=scontent-nrt1-1.xx&oh=00_AT8cBsf1jzoj_Lqk9k_7r8Iniv4TwosxP7XU9xX-bHJ3tw&oe=622DEB3E" />
                                </div>
                                
                            
                                <div>
                                    <img src="https://scontent.fkix2-2.fna.fbcdn.net/v/t1.6435-9/69267079_2365015467049953_5673712863861014528_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=0debeb&_nc_ohc=xsyVjC_4uAkAX_fkraG&_nc_ht=scontent.fkix2-2.fna&oh=00_AT_vPmu2zryKRlwHiok9cSpRtCrNoFgO9VuhQQ5QQLn7gg&oe=622B4503" />
                                </div>
                                <div>
                                    <img src="https://scontent.fkix2-1.fna.fbcdn.net/v/t1.6435-9/69711426_2376305589254274_5568227303135117312_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=0debeb&_nc_ohc=ovtlt7KVQmIAX-z18bP&_nc_ht=scontent.fkix2-1.fna&oh=00_AT9LkdgvwMU1Dcq8EX83o9otT2R-kV5orX5Z1Aiwv0sfFQ&oe=622832AE" />
                                </div>
                                <div>
                                <img src="https://scontent.fkix2-1.fna.fbcdn.net/v/t1.6435-9/69630331_2376305669254266_7510730673406083072_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=0debeb&_nc_ohc=T4T8ED8YNuQAX-vHhHV&tn=-uZLfwQF3R5vXgOe&_nc_ht=scontent.fkix2-1.fna&oh=00_AT9_-W7-q_yI5Z9G8V3M2Xp9FgWdmow-Qby9UhtiA7WyPQ&oe=622B1DC2"/>
                                </div>
                                <div>
                                <img src="https://scontent-nrt1-1.xx.fbcdn.net/v/t1.6435-9/87284580_2527680914116740_9060354263917527040_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=730e14&_nc_ohc=eyWrvbyu5GEAX_6F56F&_nc_ht=scontent-nrt1-1.xx&oh=00_AT-cWOXRIgEN_BoxuKHzLJfafahtbAbcICjlo3Xhh3sqxg&oe=622A3BF7"/>
                                </div>
                                <div>
                                <img src="https://scontent-nrt1-1.xx.fbcdn.net/v/t1.6435-9/70171349_2376306975920802_3201726243166748672_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=0debeb&_nc_ohc=6cWAupNONYoAX-y4gEz&_nc_ht=scontent-nrt1-1.xx&oh=00_AT9FddE1rVVyfTtq7rEGGogdAbmTRQRMVr2CSCrqOJOAAg&oe=622B3ECE"/>
                                </div>
                                <div>
                                <img src="https://scontent-nrt1-1.xx.fbcdn.net/v/t1.6435-9/70731625_2376306395920860_8348769893406998528_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=0debeb&_nc_ohc=o9NjOlf56P4AX9VaWcE&_nc_ht=scontent-nrt1-1.xx&oh=00_AT86wRPStSsoZyRI5s2g1gx9sWwbR2RKcjrR3SXg3NoW4w&oe=622B92B5"/>
                                </div>
                                
                                
                            </Carousel>
                            <h2 className="text-3xl lg:text-4xl tracking-tight font-semibold leading-8 lg:leading-9 text-gray-800 dark:text-white dark:text-white">Kien in Philippines</h2>
                        </div>
                        <hr clas/>
                        <hr clas/>
                        <div class="carousel-wrapper mt-5 max-w-2xl mx-auto mb-11">
                       
                            <Carousel infiniteLoop useKeyboardArrows autoPlay>
                                 <div>
                                    <img className=""src=" https://gcp.hagoromo.ac.jp/wp-content/themes/hagoromo_gcp/assets/image/idom/1/2020/report01/01_2020_report01_img01.jpg" />
                                </div>
                                <div>
                                    <img className=""src="https://scontent.fkix2-2.fna.fbcdn.net/v/t1.6435-9/90987159_2554468381437993_4798641516710985728_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=a4a2d7&_nc_ohc=yxewMG1T2TcAX-RCi93&_nc_ht=scontent.fkix2-2.fna&oh=00_AT8ETUkHMv-mBgCIpC54ivV7-hX_GM2K_BPrXAcw2g_qWQ&oe=62286075" />
                                </div>
                                <div>
                                    <img src="https://scontent.fkix2-2.fna.fbcdn.net/v/t1.6435-9/64238542_2316486178569549_1056059963333410816_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=19026a&_nc_ohc=LSbu1Tvm4EcAX-w1ZDn&_nc_ht=scontent.fkix2-2.fna&oh=00_AT9LwtiR5AaesgVF9v39mBRZBZcbJQp38af3lGSmNnCvfA&oe=6228DDE1" />
                                </div>
                                <div>
                                    <img src="./anhtruong1.jpg" />
                                </div>
                                
                            
                                <div>
                                    <img src="https://scontent.fkix2-2.fna.fbcdn.net/v/t1.6435-9/68964369_2364687123749454_2807346772496613376_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=0debeb&_nc_ohc=qBSdg2Uz2icAX8aiaCT&_nc_ht=scontent.fkix2-2.fna&oh=00_AT_nitbuSfTzrCeYnLuQYYAuVgSziCnqNsUaPUD4fEPasw&oe=6229AF6D" />
                                </div>
                                
                                
                                <div>
                                <img src=" https://www.hagoromo.ac.jp/system/wp-content/uploads/2020/11/IMG_7883-300x200.jpg"/>
                                </div>
                            
                            </Carousel>
                            <h2 className="text-3xl lg:text-4xl tracking-tight font-semibold leading-8 lg:leading-9 text-gray-800 dark:text-white dark:text-white">Kien in University</h2>
                        </div>
                        <hr clas/>
                        <hr clas/>
                        <div class="carousel-wrapper mt-5 max-w-2xl mx-auto mb-11">
                            
                            <Carousel infiniteLoop useKeyboardArrows autoPlay>
                                <div>
                                    <img className=""src="https://scontent-nrt1-1.xx.fbcdn.net/v/t1.6435-9/127890364_2763982763819886_1860433496352301700_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=ehjra8ld38IAX-9FTbS&_nc_oc=AQmzvgQKBwegW4x24vKPDCQcuFsIutA3ZoNNbsak55xRYU3HhmH6K-gce8vonjnKePE&_nc_ht=scontent-nrt1-1.xx&oh=00_AT-yhecDFwpp85mHMyVuK_S7sVhkucpk7xCL2wcPtsnqRg&oe=622C627B" />
                                </div>
                                <div>
                                    <img src="https://scontent-nrt1-1.xx.fbcdn.net/v/t1.6435-9/90172192_2553747904843374_5103425676074024960_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=ScrWnnGT7mYAX8Q6M48&_nc_ht=scontent-nrt1-1.xx&oh=00_AT_8170pQGBqlDaJDGUztLi0knCMoUjrbrVTwhv5nGA9Ow&oe=622D3167" />
                                </div>
                                <div>
                                    <img src="https://scontent-nrt1-1.xx.fbcdn.net/v/t1.6435-9/84634756_2518891108329054_4425373734446039040_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=l9Mo2Ree7EAAX87gQQ8&_nc_ht=scontent-nrt1-1.xx&oh=00_AT-iB_iBUmusPj2Z73wTJ-NcHaZGcf5MXizw8AoCRrEOkw&oe=622B9D60" />
                                </div>
                                
                            
                                <div>
                                    <img src="https://scontent-nrt1-1.xx.fbcdn.net/v/t1.6435-9/128008891_2763982433819919_1295679486023023938_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=cVJybOY-3PEAX-j8R8L&tn=-uZLfwQF3R5vXgOe&_nc_ht=scontent-nrt1-1.xx&oh=00_AT-6YIMsGUKQlgPvklJq-iInykkzPI-_4kzx4oa2KUuVhg&oe=622A980B" />
                                </div>
                                <div>
                                    <img src="https://scontent-nrt1-1.xx.fbcdn.net/v/t1.6435-9/197747715_2903334913218003_4810673072605402695_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_ohc=aEQxbGF4YFsAX9WTHZH&_nc_ht=scontent-nrt1-1.xx&oh=00_AT-yYprxTncXZXOhD-MT_uIcld1wAsUsFwtQnw1jWf3Y1w&oe=622A78C7" />
                                </div>
                                <div>
                                <img src="https://scontent-nrt1-1.xx.fbcdn.net/v/t1.6435-9/119120047_2693598057525024_3892645797782642931_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=19026a&_nc_ohc=FVatHYdD9b8AX9RM1Kb&_nc_ht=scontent-nrt1-1.xx&oh=00_AT86fjh7Vm55M389CGX9i8iIEKMmMtmRXdhIrjyq3qpE5A&oe=622BCAC7"/>
                                </div>
                                <div>
                                <img src=" https://scontent-nrt1-1.xx.fbcdn.net/v/t1.6435-9/51479941_2230356367182531_2750434126497579008_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=KiTeNr7LARkAX-2wpn6&_nc_oc=AQkIY_IKemK1OvM1h1HFlASDdeIW8CXt2C0Rp_0G13uhhM_b0SRk15HXroG-Kpg75tQ&_nc_ht=scontent-nrt1-1.xx&oh=00_AT-fPaGQrTgKmwI8gAv66X8GYKb1IIsDTGdFLLl_w4h2vw&oe=622B386D"/>
                                </div>
                            
                            </Carousel>
                            <h2 className="text-3xl lg:text-4xl tracking-tight font-semibold leading-8 lg:leading-9 text-gray-800 dark:text-white dark:text-white">Kien in Japan</h2>
                        </div>
         
        </div>
      </section>
   
     
)
};

export default Blog;
