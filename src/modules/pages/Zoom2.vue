<template></template>

<script>
import { ZoomMtg } from "@zoomus/websdk";
import { KJUR } from "jsrsasign";

export default {
  data() {
    return {
      sdkKey: "CsCFZldCTjKt0ANDP4hZg",
      sdkSecret: "TMe18yAF2e2NvOGRhXrvW4056ZAEazK9",
      meetingNumber: 81003559244,
      passWord: "x79Lpt",
      userName: "Mike",
      userMail: "",
      role: 0,
      leaveUrl: "https://prmentor-tutorias.web.app",
    };
  },
  methods: {
    generateSignature() {
      const iat = Math.round(new Date().getTime() / 1000) - 30;
      const exp = iat + 60 * 60 * 2;
      const oHeader = { alg: "HS256", typ: "JWT" };

      const oPayload = {
        sdkKey: this.sdkKey,
        appKey: this.sdkKey,
        mn: this.meetingNumber,
        role: this.role,
        iat: iat,
        exp: exp,
        tokenExp: exp,
      };

      const sHeader = JSON.stringify(oHeader);
      const sPayload = JSON.stringify(oPayload);
      const sdkJWT = KJUR.jws.JWS.sign(
        "HS256",
        sHeader,
        sPayload,
        this.sdkSecret
      );
      return sdkJWT;
    },
    joinMeeting() {
      ZoomMtg.setZoomJSLib("https://source.zoom.us/2.10.1/lib", "/av");
      // loads WebAssembly assets
      ZoomMtg.preLoadWasm();
      ZoomMtg.prepareWebSDK();

      const signatureF = this.generateSignature();

      ZoomMtg.init({
        leaveUrl: this.leaveUrl, // https://example.com/thanks-for-joining
      });

      ZoomMtg.join({
        sdkKey: this.sdkKey,
        signature: signatureF, // role in SDK signature needs to be 0
        meetingNumber: this.meetingNumber,
        password: this.passWord,
        userName: this.userName,
        success: (success) => {
          console.log("-- Join success -> ", success);
        },
        error: (error) => {
          console.log("-- Join error -> ", error);
        },
      });
    },
  },
  mounted() {
    this.joinMeeting();
  },
};
</script>

<style>
</style>