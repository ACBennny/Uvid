
/***************************************************************
 * This will hold the code for the Search Interface and Engine
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/


// DECLARATIONS

    let search_query = '';
    const searchTitle = document.querySelector(".srt_dynamic");
    const searchInput = document.getElementById('searchInput');
    const searchXmark = document.querySelector(".clearSearchFieldIconBox");
    const searchwall = document.querySelector("#catalogId");




    // SEARCH BAR

        searchInput.addEventListener("input" , () => 
        {
            if(searchInput.value.length > 0)
            {
                searchXmark.classList.add("active");
                return;
            }
            searchXmark.classList.remove("active");
        });

        // Clears search field
        searchXmark.addEventListener("click" , () => 
        {
            searchInput.value = "";
            searchXmark.classList.remove("active");
        });



// SEARCH THE ENGINE

    // Search inventory
    const searchInventory =
    [
        // Anime content
        {
            show_link: `/Library/Anime/JujutsuKaisen.html`,
            show_image: `/Library/Anime/img/1.jpg`,
            show_title: `Jujutsu Kaisen`,
            show_section: `Anime`,
            show_code: `Jujutsu Kaisen sorcery fight anime shows animation`,
        },
        {
            show_link: `/Library/Anime/DemonSlayer.html`,
            show_image: `/Library/Anime/img/2.jpg`,
            show_title: `Demon Slayer`,
            show_section: `Anime`,
            show_code: `Demon Slayer Kimetsu No Yaiba anime shows animation`,
        },
        {
            show_link: `/Library/Anime/AttackOnTitan.html`,
            show_image: `/Library/Anime/img/3.jpg`,
            show_title: `Attack On Titan`,
            show_section: `Anime`,
            show_code: `Shingeki no Kyojin Attack On Titan anime`,
        },
        {
            show_link: `/Library/Anime/Naruto.html`,
            show_image: `/Library/Anime/img/4.jpg`,
            show_title: `Naruto`,
            show_section: `Anime`,
            show_code: `Naruto anime`,
        },
        {
            show_link: `/Library/Anime/FullmetalPanic.html`,
            show_image: `/Library/Anime/img/5.jpg`,
            show_title: `Fullmetal Panic`,
            show_section: `Anime`,
            show_code: `Furumetaru Panikku Fullmetal Panic anime`,
        },
        {
            show_link: `/Library/Anime/FullmetalAlchemist.html`,
            show_image: `/Library/Anime/img/6.jpg`,
            show_title: `Fullmetal Alchemist`,
            show_section: `Anime`,
            show_code: `Hagane no Renkinjutsushi Fullmetal Alchemist anime`,
        },
        {
            show_link: `/Library/Anime/FullmetalAlchemistBrotherhood.html`,
            show_image: `/Library/Anime/img/7.jpg`,
            show_title: `Fullmetal Alchemist Brotherhood`,
            show_section: `Anime`,
            show_code: `Hagane no Renkinjutsushi Fullmetal Alchemist Brotherhood anime`,
        },
        {
            show_link: `/Library/Anime/ClassroomoftheElite.html`,
            show_image: `/Library/Anime/img/8.jpg`,
            show_title: `Classroom of the Elite`,
            show_section: `Anime`,
            show_code: `Classroom of the Elite Yokoso Jitsuryoku Shijo Shugi no Kyoshitsu anime`,
        },
        {
            show_link: `/Library/Anime/BlueExorcist.html`,
            show_image: `/Library/Anime/img/9.jpg`,
            show_title: `Blue Exorcist`,
            show_section: `Anime`,
            show_code: `Ao no Ekusoshisuto Gekijoban Blue Exorcist anime`,
        },
        {
            show_link: `/Library/Anime/RentaGirlfriend.html`,
            show_image: `/Library/Anime/img/10.jpg`,
            show_title: `Spy X Family`,
            show_section: `Anime`,
            show_code: `Spy X Family anime`,
        },
        {
            show_link: `/Library/Anime/Naruto.html`,
            show_image: `/Library/Anime/img/11.jpg`,
            show_title: `Rent a Girlfriend`,
            show_section: `Anime`,
            show_code: `Rent a Girlfriend Kanojo Okarishimasu anime`,
        },
        {
            show_link: `/Library/Anime/TokyoGhoul.html`,
            show_image: `/Library/Anime/img/12.jpg`,
            show_title: `Tokyo Ghoul`,
            show_section: `Anime`,
            show_code: `Tokyo Ghoul Tokyo Guru anime`,
        },
        {
            show_link: `/Library/Anime/InazumaEleven.html`,
            show_image: `/Library/Anime/img/13.jpg`,
            show_title: `Inazuma Eleven`,
            show_section: `Anime`,
            show_code: `Inazuma Eleven Inazuma Irebun anime`,
        },
        {
            show_link: `/Library/Anime/Aoashi.html`,
            show_image: `/Library/Anime/img/14.jpg`,
            show_title: `Aoashi`,
            show_section: `Anime`,
            show_code: `Aoashi anime`,
        },
        {
            show_link: `/Library/Anime/CyberpunkEdgeRunners.html`,
            show_image: `/Library/Anime/img/15.jpg`,
            show_title: `Cyberpunk: EdgeRunners`,
            show_section: `Anime`,
            show_code: `Cyberpunk Edgerunners Saibapanku Edjirannazu anime`,
        },
        {
            show_link: `/Library/Anime/TomodachiGame.html`,
            show_image: `/Library/Anime/img/16.jpg`,
            show_title: `>Tomodachi Game`,
            show_section: `Anime`,
            show_code: `Tomodachi Game Tomodachi Gemu anime`,
        },
        {
            show_link: `/Library/Anime/KaguyaSama.html`,
            show_image: `/Library/Anime/img/17.jpg`,
            show_title: `Kaguya-Sama`,
            show_section: `Anime`,
            show_code: `Kaguya-sama wa Kokurasetai Kaguya sama wa Kokurasetai Love is War anime`,
        },
        {
            show_link: `/Library/Anime/Kakegurui.html`,
            show_image: `/Library/Anime/img/18.jpg`,
            show_title: `Kakegurui`,
            show_section: `Anime`,
            show_code: `Kakegure Kakegurui anime`,
        },
        {
            show_link: `/Library/Anime/ThatIRecentlyGotReincarnatedAsASlime.html`,
            show_image: `/Library/Anime/img/19.jpg`,
            show_title: `That I recently got Reincarnated as a Slime`,
            show_section: `Anime`,
            show_code: `That I recently got Reincarnated as a Slime Tensei Shitara Suraimu Datta Ken anime`,
        },
        {
            show_link: `/Library/Anime/RisingoftheShieldHero.html`,
            show_image: `/Library/Anime/img/20.jpg`,
            show_title: `Rising of the Shield hero`,
            show_section: `Anime`,
            show_code: `Tate no Yūsha no Nariagari Rising of the Shield anime`,
        },
        {
            show_link: `/Library/Anime/VioletEvergarden.html`,
            show_image: `/Library/Anime/img/21.jpg`,
            show_title: `Violet Evergarden`,
            show_section: `Anime`,
            show_code: `Vaioretto Evagaden Violet Evergarden anime`,
        },
        {
            show_link: `/Library/Anime/YourLieinApril.html`,
            show_image: `/Library/Anime/img/22.jpg`,
            show_title: `Your lie in April`,
            show_section: `Anime`,
            show_code: `Shigatsu wa Kimi no Uso Your lie in April anime`,
        },
        {
            show_link: `/Library/Anime/KurokonoBasket.html`,
            show_image: `/Library/Anime/img/23.jpg`,
            show_title: `Kuroko no Basuke`,
            show_section: `Anime`,
            show_code: `Kunoku no Basket Kuroko no Basuke anime`,
        },
        {
            show_link: `/Library/Anime/EnenNoShouboutai.html`,
            show_image: `/Library/Anime/img/24.jpg`,
            show_title: `Enen no Shouboutai`,
            show_section: `Anime`,
            show_code: `Enen no Shouboutai Fireforce no Basuke anime`,
        },
        {
            show_link: `/Library/Anime/VinlandSaga.html`,
            show_image: `/Library/Anime/img/25.jpg`,
            show_title: `Vinland Saga`,
            show_section: `Anime`,
            show_code: `Vinland Saga Vinrando Saga anime`,
        },
        {
            show_link: `/Library/Anime/TokyoRevengers.html`,
            show_image: `/Library/Anime/img/26.jpg`,
            show_title: `Tokyo Revengers`,
            show_section: `Anime`,
            show_code: `Tokyo Revengers Tōkyō Ribenjāzu Tokyo Ribenjazu anime`,
        },
        {
            show_link: `/Library/Anime/MyHeroAcademia.html`,
            show_image: `/Library/Anime/img/27.jpg`,
            show_title: `My Hero Academia`,
            show_section: `Anime`,
            show_code: `My Hero Academia Boku no Hīrō Akademia Boku no Hiro Akademia anime`,
        },
        {
            show_link: `/Library/Anime/CowboyBebop.html`,
            show_image: `/Library/Anime/img/28.jpg`,
            show_title: `Cowboy Bebop`,
            show_section: `Anime`,
            show_code: `Cowboy Bebop Kaubōi Bibappu Kauboi Bibappu anime`,
        },
        {
            show_link: `/Library/Anime/DeathNote.html`,
            show_image: `/Library/Anime/img/29.jpg`,
            show_title: `Death Note`,
            show_section: `Anime`,
            show_code: `Death Note anime`,
        },
        {
            show_link: `/Library/Anime/OnePiece.html`,
            show_image: `/Library/Anime/img/30.jpg`,
            show_title: `One Piece`,
            show_section: `Anime`,
            show_code: `One Piece anime`,
        },
        {
            show_link: `/Library/Anime/OnePunchMan.html`,
            show_image: `/Library/Anime/img/31.jpg`,
            show_title: `One Punch man`,
            show_section: `Anime`,
            show_code: `One Punch man Wanpanman anime`,
        },
        {
            show_link: `/Library/Anime/HunterXHunter.html`,
            show_image: `/Library/Anime/img/32.jpg`,
            show_title: `Hunter X Hunter`,
            show_section: `Anime`,
            show_code: `Hunter X Hunter anime`,
        },
        {
            show_link: `/Library/Anime/SteinsGate.html`,
            show_image: `/Library/Anime/img/33.jpg`,
            show_title: `Steins Gate`,
            show_section: `Anime`,
            show_code: `Steins Gate anime`,
        },
        {
            show_link: `/Library/Anime/DragonBallZ.html`,
            show_image: `/Library/Anime/img/34.jpg`,
            show_title: `Dragon ball Z`,
            show_section: `Anime`,
            show_code: `Dragon ball Z anime`,
        },
        {
            show_link: `/Library/Anime/Bleach.html`,
            show_image: `/Library/Anime/img/35.jpg`,
            show_title: `Bleach`,
            show_section: `Anime`,
            show_code: `Bleach anime`,
        },
        {
            show_link: `/Library/Anime/AkameGaKill.html`,
            show_image: `/Library/Anime/img/36.jpg`,
            show_title: `Akame ga Kill!`,
            show_section: `Anime`,
            show_code: `Akame ga Kill! Akame ga Kiru! anime`,
        },
        {
            show_link: `/Library/Anime/SwordArtOnline.html`,
            show_image: `/Library/Anime/img/37.jpg`,
            show_title: `Sword Art Online`,
            show_section: `Anime`,
            show_code: `Sword Art Online Sōdo Āto Onrain Sodo Ato Onrain anime`,
        },
        {
            show_link: `/Library/Anime/BongouStrayDogs.html`,
            show_image: `/Library/Anime/img/38.jpg`,
            show_title: `Bongou Stray Dogs`,
            show_section: `Anime`,
            show_code: `Bongou Stray Dogs Bungu Stray Dogs Bongu Stray Dogs Bungou Stray Dogs anime`,
        },
        {
            show_link: `/Library/Anime/MobPsycho.html`,
            show_image: `/Library/Anime/img/39.jpg`,
            show_title: `Mob Psycho`,
            show_section: `Anime`,
            show_code: `Mob Psycho Mobu Saiko Hyaku anime`,
        },
        {
            show_link: `/Library/Anime/SamuraiChamploo.html`,
            show_image: `/Library/Anime/img/40.jpg`,
            show_title: `Samurai Champloo`,
            show_section: `Anime`,
            show_code: `Samurai Champloo anime`,
        },
        {
            show_link: `/Library/Anime/HellSing.html`,
            show_image: `/Library/Anime/img/41.jpg`,
            show_title: `HellSing`,
            show_section: `Anime`,
            show_code: `HellSing Hell Sing anime`,
        },
        {
            show_link: `/Library/Anime/BlackLagoon.html`,
            show_image: `/Library/Anime/img/42.jpg`,
            show_title: `Black Lagoon`,
            show_section: `Anime`,
            show_code: `Black Lagoon BlackLagoon anime`,
        },
        {
            show_link: `/Library/Anime/FutureDiary.html`,
            show_image: `/Library/Anime/img/43.jpg`,
            show_title: `Future Diary`,
            show_section: `Anime`,
            show_code: `Future Diary anime`,
        },
        {
            show_link: `/Library/Anime/Another.html`,
            show_image: `/Library/Anime/img/44.jpg`,
            show_title: `Another`,
            show_section: `Anime`,
            show_code: `Another anime`,
        },
        {
            show_link: `/Library/Anime/FairyTale.html`,
            show_image: `/Library/Anime/img/45.jpg`,
            show_title: `Fairy Tale`,
            show_section: `Anime`,
            show_code: `Fairy Tale FairyTale anime`,
        },
        {
            show_link: `/Library/Anime/AfroSamurai.html`,
            show_image: `/Library/Anime/img/46.jpg`,
            show_title: `Afro Samurai`,
            show_section: `Anime`,
            show_code: `Afro Samurai AfroSamurai anime`,
        },
        {
            show_link: `/Library/Anime/DemonKingDamaio.html`,
            show_image: `/Library/Anime/img/47.jpg`,
            show_title: `Demon King Damaio`,
            show_section: `Anime`,
            show_code: `Demon King Damaio anime`,
        },
        {
            show_link: `/Library/Anime/ParadiseKiss.html`,
            show_image: `/Library/Anime/img/48.jpg`,
            show_title: `Paradise Kiss`,
            show_section: `Anime`,
            show_code: `Paradise Kiss anime`,
        },
        {
            show_link: `/Library/Anime/Noragami.html`,
            show_image: `/Library/Anime/img/49.jpg`,
            show_title: `Noragami`,
            show_section: `Anime`,
            show_code: `Noragami anime`,
        },
        {
            show_link: `/Library/Anime/GoblinSlayer.html`,
            show_image: `/Library/Anime/img/50.jpg`,
            show_title: `Goblin Slayer`,
            show_section: `Anime`,
            show_code: `Goblin Slayer GoblinSlayer anime`,
        },
        {
            show_link: `/Library/Anime/DrStone.html`,
            show_image: `/Library/Anime/img/51.jpg`,
            show_title: `Dr Stone`,
            show_section: `Anime`,
            show_code: `Dr Stone DrStone anime`,
        },
        {
            show_link: `/Library/Anime/BlueLock.html`,
            show_image: `/Library/Anime/img/52.jpg`,
            show_title: `BlueLock`,
            show_section: `Anime`,
            show_code: `Blue Lock BlueLock anime`,
        },
        {
            show_link: `/Library/Anime/SeishunButa.html`,
            show_image: `/Library/Anime/img/53.jpg`,
            show_title: `Seishun Buta`,
            show_section: `Anime`,
            show_code: `SeishunButa Seishun Buta Yarō anime`,
        },
        {
            show_link: `/Library/Anime/DarkGathering.html`,
            show_image: `/Library/Anime/img/54.jpg`,
            show_title: `Dark Gathering`,
            show_section: `Anime`,
            show_code: `Dark Gathering  Daku Gyazaringu Dāku Gyazaringu anime`,
        },
        {
            show_link: `/Library/Anime/TeruMomijiyama.html`,
            show_image: `/Library/Anime/img/55.jpg`,
            show_title: `Teru Momijiyama`,
            show_section: `Anime`,
            show_code: `Shy Teru Momijiyama anime`,
        },
        {
            show_link: `/Library/Anime/MFGhost.html`,
            show_image: `/Library/Anime/img/56.jpg`,
            show_title: `MF Ghost`,
            show_section: `Anime`,
            show_code: `MF Ghost MFGhost MF Gōsuto MF Gosuto anime`,
        },
        {
            show_link: `/Library/Anime/YakusokuNoNeverland.html`,
            show_image: `/Library/Anime/img/57.jpg`,
            show_title: `Yakusoku no neverland`,
            show_section: `Anime`,
            show_code: `Yakusoku no neverland Promised Neverland anime`,
        },
        {
            show_link: `/Library/Anime/SaikiK.html`,
            show_image: `/Library/Anime/img/58.jpg`,
            show_title: `Saiki K`,
            show_section: `Anime`,
            show_code: `SaikiK Saiki Kusuo no Sai-nan The Disastrous Life of Saiki K anime`,
        },
        {
            show_link: `/Library/Anime/HowARealisticHeroRebuiltTheKingdom.html`,
            show_image: `/Library/Anime/img/59.jpg`,
            show_title: `How A Realistic Hero RebuiltThe Kingdom`,
            show_section: `Anime`,
            show_code: `How A Realistic Hero RebuiltThe Kingdom Genjitsu Shugi Yusha no Okoku Saikenki Genjitsu Shugi Yūsha no Ōkoku Saikenki anime`,
        },
        {
            show_link: `/Library/Anime/AsteriskWar.html`,
            show_image: `/Library/Anime/img/60.jpg`,
            show_title: `Asterisk War`,
            show_section: `Anime`,
            show_code: `AsteriskWar Asterisk War Gakusen Toshi Asutarisuku anime`,
        },
        {
            show_link: `/Library/Anime/BlackCover.html`,
            show_image: `/Library/Anime/img/61.jpg`,
            show_title: `Black Cover`,
            show_section: `Anime`,
            show_code: `BlackCover Black Cover Burakku Kurōbā Burakku Kuroba anime`,
        },
        {
            show_link: `/Library/Anime/Bullbuster.html`,
            show_image: `/Library/Anime/img/62.jpg`,
            show_title: `Bullbuster`,
            show_section: `Anime`,
            show_code: `Bullbuster Bull buster anime`,
        },
        {
            show_link: `/Library/Anime/ChainsawMan.html`,
            show_image: `/Library/Anime/img/63.jpg`,
            show_title: `Chainsaw man`,
            show_section: `Anime`,
            show_code: `ChainsawMan Chainsaw man Chensō Man Chenso Man anime`,
        },
        {
            show_link: `/Library/Anime/Dororo.html`,
            show_image: `/Library/Anime/img/64.jpg`,
            show_title: `Dororo`,
            show_section: `Anime`,
            show_code: `Dororo anime`,
        },
        {
            show_link: `/Library/Anime/Erased.html`,
            show_image: `/Library/Anime/img/65.jpg`,
            show_title: `Erased`,
            show_section: `Anime`,
            show_code: `Erased Boku dake ga Inai Mach anime`,
        },
        {
            show_link: `/Library/Anime/Vivy.html`,
            show_image: `/Library/Anime/img/66.jpg`,
            show_title: `Vivy`,
            show_section: `Anime`,
            show_code: `Vivy Fluorite Eye's Song Vivy: Fluorite Eye's Song anime`,
        },
        {
            show_link: `/Library/Anime/AndYouThoughtThereIsNeverAGirlOnline.html`,
            show_image: `/Library/Anime/img/67.jpg`,
            show_title: `And You Thought There Is Never a Girl Online`,
            show_section: `Anime`,
            show_code: `Netoge no Yome wa Onna no Ko Janai to Omotta And You Thought There Is Never a Girl Online anime`,
        },
        {
            show_link: `/Library/Anime/Haikyuu.html`,
            show_image: `/Library/Anime/img/68.jpg`,
            show_title: `Haikyuu`,
            show_section: `Anime`,
            show_code: `Haikyū Haikyu Haikyuu anime`,
        },
        {
            show_link: `/Library/Anime/HowNotToSummonADemonLord.html`,
            show_image: `/Library/Anime/img/69.jpg`,
            show_title: `How Not TO Summon a Demon Lord`,
            show_section: `Anime`,
            show_code: `Go-Tobun no Hanayome Go-Tōbun no Hanayome anime`,
        },
        {
            show_link: `/Library/Anime/HowNotToSummonADemonLord.html`,
            show_image: `/Library/Anime/img/70.jpg`,
            show_title: `How Not TO Summon a Demon Lord`,
            show_section: `Anime`,
            show_code: `HNTSADL Isekai Maō to Shōkan Shōjo no Dorei Majutsu Isekai Mao to Shokan Shojo no Dorei Majutsu How Not TO Summon a Demon Lord anime`,
        },
        {
            show_link: `/Library/Anime/Horimiya.html`,
            show_image: `/Library/Anime/img/71.jpg`,
            show_title: `Horimiya`,
            show_section: `Anime`,
            show_code: `Hori-san to Miyamura-kun Hori and Miyamura Horimiya anime`,
        },
        {
            show_link: `/Library/Anime/KimitoBoku.html`,
            show_image: `/Library/Anime/img/72.jpg`,
            show_title: `Kimi to boku`,
            show_section: `Anime`,
            show_code: `Kimi to boku anime`,
        },
        {
            show_link: `/Library/Anime/TomochanIsaGirl.html`,
            show_image: `/Library/Anime/img/73.jpg`,
            show_title: `Tomo-chan Is a Girl!`,
            show_section: `Anime`,
            show_code: `Tomo-chan Is a Girl! Tomo-chan wa Onnanoko! anime`,
        },
        {
            show_link: `/Library/Anime/BochiTheRock.html`,
            show_image: `/Library/Anime/img/74.jpg`,
            show_title: `Bocabyhi the Rock`,
            show_section: `Anime`,
            show_code: `Bocabyhi the Rock Hiroi Kikuri no Fukazake Nikki anime`,
        },
        {
            show_link: `/Library/Anime/LinkClick.html`,
            show_image: `/Library/Anime/img/75.jpg`,
            show_title: `Link Click`,
            show_section: `Anime`,
            show_code: `Link Click Shíguāng Dàilǐrén Shiguang Dailiren anime`,
        },
        {
            show_link: `/Library/Anime/MyLifeasInuSansDog.html`,
            show_image: `/Library/Anime/img/76.jpg`,
            show_title: `My Life as Inu-san's dog`,
            show_section: `Anime`,
            show_code: `My Life as Inu-san's dog Inu ni Nattara Suki na Hito ni Hirowareta anime`,
        },
        {
            show_link: `/Library/Anime/MyStepmomsDaughterisMyEx.html`,
            show_image: `/Library/Anime/img/77.jpg`,
            show_title: `My Stepmom's daughter is my Ex`,
            show_section: `Anime`,
            show_code: `My Stepmom's daughter is my Ex Irido Mizuto anime`,
        },
        {
            show_link: `/Library/Anime/Overlord.html`,
            show_image: `/Library/Anime/img/78.jpg`,
            show_title: `Overlord`,
            show_section: `Anime`,
            show_code: `Ōbārōdo Obarodo Overlord anime`,
        },
        {
            show_link: `/Library/Anime/TalentlessNana.html`,
            show_image: `/Library/Anime/img/79.jpg`,
            show_title: `Talentless Nana`,
            show_section: `Anime`,
            show_code: `TalentlessNana Talentless Nana Munō na Nana Muno na Nana anime`,
        },
        {
            show_link: `/Library/Anime/VanitasNoCarte.html`,
            show_image: `/Library/Anime/img/80.jpg`,
            show_title: `Vanitas no Carte`,
            show_section: `Anime`,
            show_code: `Vanitasu no Karute Vanitas no Carte anime anime`,
        },
        {
            show_link: `/Library/Anime/InitialD.html`,
            show_image: `/Library/Anime/img/81.jpg`,
            show_title: `Initial D`,
            show_section: `Anime`,
            show_code: `InitialD Initial D Inisharu Dī Inisharu Di anime`,
        },
        {
            show_link: `/Library/Anime/AssassinationClassroom.html`,
            show_image: `/Library/Anime/img/82.jpg`,
            show_title: `Assassination Classroom`,
            show_section: `Anime`,
            show_code: `Assassination Classroom Ansatsu Kyōshitsu Ansatsu Kyoshitsu anime`,
        },
        {
            show_link: `/Library/Anime/MashleMagicAndMuscle.html`,
            show_image: `/Library/Anime/img/83.jpg`,
            show_title: `Mashle Magic and Muscle`,
            show_section: `Anime`,
            show_code: `Mashle Magic and Muscle Masshuru anime`,
        },
        {
            show_link: `/Library/Anime/TrainToTheEndOfTheWorld.html`,
            show_image: `/Library/Anime/img/84.jpg`,
            show_title: `Train to the End of the world`,
            show_section: `Anime`,
            show_code: `Train to the End of the world anime`,
        },
        {
            show_link: `/Library/Anime/Yatagarasu.html`,
            show_image: `/Library/Anime/img/85.jpg`,
            show_title: `Yatagarasu`,
            show_section: `Anime`,
            show_code: `Yatagarasu anime`,
        },
        {
            show_link: `/Library/Anime/WindBreaker.html`,
            show_image: `/Library/Anime/img/86.jpg`,
            show_title: `Wind Breaker`,
            show_section: `Anime`,
            show_code: `Wind Breaker Uindo Bureikā Uindo Bureika anime`,
        },
        {
            show_link: `/Library/Anime/ApothecaryDiaries.html`,
            show_image: `/Library/Anime/img/87.jpg`,
            show_title: `Apothecary Diaries`,
            show_section: `Anime`,
            show_code: `Apothecary Diaries Kusuriya no Hitorigoto anime`,
        },
        {
            show_link: `/Library/Anime/ASignOfAffection.html`,
            show_image: `/Library/Anime/img/88.jpg`,
            show_title: `A Sign Of Affection`,
            show_section: `Anime`,
            show_code: `A Sign Of Affection Hibike! Yūfoniamu Hibike! Yufoniamu anime`,
        },
        {
            show_link: `/Library/Anime/SoundEuphonium.html`,
            show_image: `/Library/Anime/img/89.jpg`,
            show_title: `Sound! Euphonium`,
            show_section: `Anime`,
            show_code: `Sound! Euphonium anime`,
        },
        {
            show_link: `/Library/Anime/TheWitchAndTheBeast.html`,
            show_image: `/Library/Anime/img/90.jpg`,
            show_title: `The Witch And The Beast`,
            show_section: `Anime`,
            show_code: `The Witch And The Beast anime`,
        },
        {
            show_link: `/Library/Anime/Black Butler.html`,
            show_image: `/Library/Anime/img/91.jpg`,
            show_title: `Black Butler`,
            show_section: `Anime`,
            show_code: `Black Butler Kuroshitsuji anime`,
        },
        {
            show_link: `/Library/Anime/HighSpeedEtoile.html`,
            show_image: `/Library/Anime/img/92.jpg`,
            show_title: `HighSpeed Etoile`,
            show_section: `Anime`,
            show_code: `High Speed Etoile HighSpeed Etoile HIGHSPEED Étoile anime`,
        },
        {
            show_link: `/Library/Anime/MetallicRouge.html`,
            show_image: `/Library/Anime/img/93.jpg`,
            show_title: `Metallic Rouge`,
            show_section: `Anime`,
            show_code: `Metallic Rouge Metarikku Rūju Metarikku Ruju anime`,
        },
        {
            show_link: `/Library/Anime/AkumaDrive.html`,
            show_image: `/Library/Anime/img/94.jpg`,
            show_title: `Akuma Drive`,
            show_section: `Anime`,
            show_code: `Akuma Drive AkumaDrive anime`,
        },
        {
            show_link: `/Library/Anime/AstroNote.html`,
            show_image: `/Library/Anime/img/95.jpg`,
            show_title: `Astro Note`,
            show_section: `Anime`,
            show_code: `Astro Note Asutoro Nōto Asutoro Noto anime`,
        },
        {
            show_link: `/Library/Anime/HeavenOfficialsBlessing.html`,
            show_image: `/Library/Anime/img/96.jpg`,
            show_title: `Heaven Official's Blessing`,
            show_section: `Anime`,
            show_code: `Heaven Officials Blessings Heaven Official's Blessings Tiān Guān Cì Fú Tian Guan Ci Fu anime`,
        },
        {
            show_link: `/Library/Anime/TheWrongWayToUseHealingMagic.html`,
            show_image: `/Library/Anime/img/97.jpg`,
            show_title: `The Wrong Way To Use Healing Magic`,
            show_section: `Anime`,
            show_code: `The Wrong Way To Use Healing Magic anime`,
        },
        {
            show_link: `/Library/Anime/Konosuba.html`,
            show_image: `/Library/Anime/img/98.jpg`,
            show_title: `Konosuba`,
            show_section: `Anime`,
            show_code: `Konosuba God's Blessing on This Wonderful World! KonoSuba: God's Blessing on This Wonderful World! anime`,
        },
        {
            show_link: `/Library/Anime/KaijuNo8.html`,
            show_image: `/Library/Anime/img/99.jpg`,
            show_title: `Kaiju No. 8`,
            show_section: `Anime`,
            show_code: `Kaiju No. 8 Kaiju No.8 Kaiju No8 KaijuNo8 Kaijū Hachigō Kaiju Hachigo anime`,
        },
        {
            show_link: `/Library/Anime/TheNewGate.html`,
            show_image: `/Library/Anime/img/100.jpg`,
            show_title: `The New Gate`,
            show_section: `Anime`,
            show_code: `The New Gate anime`,
        },
        {
            show_link: `/Library/Anime/SoloLeveling.html`,
            show_image: `/Library/Anime/img/101.jpg`,
            show_title: `Solo Leveling`,
            show_section: `Anime`,
            show_code: `SoloLeveling Solo Leveling Na Honjaman Rebeleop anime`,
        },
        {
            show_link: `/Library/Anime/DailyLifeOfAnImmortalKing.html`,
            show_image: `/Library/Anime/img/102.jpg`,
            show_title: `Daily Life Of An Immortal King`,
            show_section: `Anime`,
            show_code: `Daily Life Of An Immortal King Xiān Wáng de Rìcháng Shēnghuó Xian Wáng de Richang Shenghuo anime`,
        },
    ];


    // Function to display items
    const displayItem = (items) => 
    {
        searchwall.innerHTML = items.map((item) => 
        {
            const { show_link, show_image, show_title, show_section } = item;
            if((search_query.length > 0) && (search_query != undefined) && (search_query != null) && (search_query != " "))
            {
                return `
                <a href="${show_link}" class="cardholder_bdr" title="Watch ${show_title}">
                    <div class="slide_card">
                        <div class="cardimg">
                            <img src="${show_image}" alt="Image of the ${show_section}: ${show_title}">
                        </div>
                        <div class="cardinfo">
                            <h3>${show_title}</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="slideCardIcon">
                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                            </svg>
                        </div>
                    </div>
                </a>
            `;
            }
            else
            {
                return null;
            }
        }).join('');
    };

    // Filter and display result based on user's entry
    searchInput.addEventListener("keyup", () => 
    {
        search_query = searchInput.value.trim().toLowerCase();
        searchTitle.textContent = `"${search_query}"`;
        const filteredData = searchInventory.filter((item) => item.show_code.toLowerCase().includes(search_query));
        displayItem(filteredData);

        // Automatically scrolls the page back to top for every input
        window.scrollTo(null , 0);
    });








