<template>
    <div>
        <div class="wrapper">
            <div class="black part">
                <div class="sou-program">
                    <div class="image-wrapper">
                        <img
                            class="logo-desktop"
                            src="@/assets/sou-program-logo-desktop.png"
                            alt="Šou program"
                        />
                        <img
                            class="logo-mobile"
                            src="@/assets/sou-program-logo-mobile.png"
                            alt="Šou program"
                        />
                    </div>
                </div>
            </div>
            <div class="white part">
                <div class="white-wrapper">
                    <div></div>
                    <div class="slogan">
                        <h1>Još jedna studentska udruga.</h1>
                    </div>
                    <div>
                        <div>
                            <div class="email">
                                <u
                                    ><a :href="socialUrls.mail.mailHref">{{
                                        socialUrls.mail.mailTo
                                    }}</a></u
                                >
                            </div>
                            <div class="footer-wrapper">
                                <div class="flex gap-4">
                                    <!-- <a :href="socialUrls.mail.mailHref"
                                        ><IconMail
                                    /></a> -->
                                    <a :href="socialUrls.discord"
                                        ><IconDiscord
                                    /></a>
                                    <a :href="socialUrls.instagram"
                                        ><IconInstagram
                                    /></a>
                                    <a :href="socialUrls.facebook"
                                        ><IconFacebook
                                    /></a>
                                    <a :href="socialUrls.linkedin"
                                        ><IconLinkedin
                                    /></a>
                                    <a :href="socialUrls.youtube"
                                        ><IconYoutube
                                    /></a>
                                    <a :href="socialUrls.github"
                                        ><IconGithub
                                    /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import IconMail from "@/components/icons/Mail.vue";
import IconDiscord from "@/components/icons/Discord.vue";
import IconInstagram from "@/components/icons/Instagram.vue";
import IconFacebook from "@/components/icons/Facebook.vue";
import IconLinkedin from "@/components/icons/Linkedin.vue";
import IconYoutube from "@/components/icons/Youtube.vue";
import IconGithub from "@/components/icons/Github.vue";

export default {
    data() {
        const mailTo = "info@souprogram.hr";
        const subject = "Email from site";
        const subjectURIEncoded = encodeURIComponent(subject);

        const mailHref = `mailto:${mailTo}?subject=${subjectURIEncoded}`;

        const socialUrls = {
            mail: { mailHref, mailTo },
            discord: "https://discord.gg/JKzMW43hTA",
            instagram: "https://instagram.com/souprogram.hr",
            facebook: "https://www.facebook.com/souprogram.hr",
            linkedin: "https://www.linkedin.com/company/sou-program/",
            youtube: "https://youtube.com/@SouProgramYTkanal",
            github: "https://github.com/souprogram",
        };

        return {
            socialUrls,
        };
    },
    components: {
        // IconMail,
        IconDiscord,
        IconInstagram,
        IconFacebook,
        IconLinkedin,
        IconYoutube,
        IconGithub,
    },
};
</script>

<style scoped>
* {
    font-family: "Poppins", sans-serif;
}

.wrapper {
    display: flex;
    flex-direction: row;
    min-height: 100dvh;
    max-height: 200dvh;
}

.white-wrapper {
    padding: 48px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    height: 100%;
}

.white-wrapper h1 {
    margin-top: 32px;
    font-size: 36px;
}

.slogan {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
}

.part {
    width: 50dvw;
    height: 100dvh;
}

.image-wrapper {
    width: 30vw;
    display: flex;
}

.image-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
}

.black {
    background-color: #1c1c1c;
    color: #ffffff;
}

.white {
    background-color: #ffffff;
    color: #1c1c1c;
}

.sou-program {
    padding: 32px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 32px;
    height: 100%;
}

.sou-program h1 {
    font-size: 44px;
}

.logo-mobile {
    display: none;
}

@media (max-width: 768px) {
    .wrapper {
        flex-direction: column;
    }

    .sou-program {
        flex-direction: column;
    }

    .part {
        width: 100%;
    }

    .sou-program br {
        display: none;
    }

    .image-wrapper {
        width: 70vw;
        display: flex;
    }
    .logo-desktop {
        display: none;
    }
    .logo-mobile {
        display: block;
    }
}

.email,
.footer-wrapper {
    display: flex;
    justify-content: center;
}

.email {
    padding-bottom: 1em;
}

.footer-item {
    padding: 0.5em;
    font-size: 1.5em;
}

.footer-item a {
    text-decoration: none;
    color: #1c1c1c;
}

a {
    color: #1c1c1c;
}
</style>
