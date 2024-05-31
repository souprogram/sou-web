<template>
  <div class="flex flex-col md:flex-row min-h-dvh max-h-[200dvh] font-poppins">
    <div class="bg-black text-white w-full md:w-[50dvw] h-dvh">
      <div class="p-12 justify-center items-center w-full gap-8 h-full flex flex-col">
        <div class="w-[70vw] md:w-[30vw] flex grow">
          <img
            class="hidden md:block size-full object-contain object-center"
            src="@/assets/sou-program-logo-desktop.png"
            alt="Šou program"
          >
          <img
            class="md:hidden block size-full object-contain object-center"
            src="@/assets/sou-program-logo-mobile.png"
            alt="Šou program"
          >
        </div>
        <div class="w-full flex flex-col gap-4">
          <p>Sponzori:</p>
          <div class="flex flex-row gap-4">
            <a href="https://plus.hr">
              <img
                class="h-12 w-auto"
                src="@/assets/sponsors/plus_hosting_logo.svg"
                alt="Plus hosting"
              >
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white text-black w-full md:w-[50dvw] h-dvh">
      <div class="p-12 flex flex-col gap-8 h-full">
        <div class="grow flex flex-col justify-center mx-auto">
          <h1 class="mt-8 text-4xl">
            Još jedna studentska udruga.
          </h1>
        </div>
        <div>
          <div class="flex flex-col gap-4">
            <div class="flex justify-center flex-row">
              <a
                class="underline"
                :href="socialUrls.mail.mailHref"
              >{{ socialUrls.mail.mailTo }}</a>
            </div>
            <div class="flex justify-center flex-row no-underline">
              <div class="flex gap-4">
                <a :href="socialUrls.discord"><IconDiscord /></a>
                <a :href="socialUrls.instagram"><IconInstagram /></a>
                <a :href="socialUrls.facebook"><IconFacebook /></a>
                <a :href="socialUrls.linkedin"><IconLinkedin /></a>
                <a :href="socialUrls.youtube"><IconYoutube /></a>
                <a :href="socialUrls.github"><IconGithub /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconDiscord from "./components/icons/Discord.vue";
import IconFacebook from "./components/icons/Facebook.vue";
import IconGithub from "./components/icons/Github.vue";
import IconInstagram from "./components/icons/Instagram.vue";
import IconLinkedin from "./components/icons/Linkedin.vue";
import IconYoutube from "./components/icons/Youtube.vue";

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
</script>
