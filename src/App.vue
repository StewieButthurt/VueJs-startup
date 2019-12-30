<template>
  <div id="app">
    <app-welcome></app-welcome>
    <app-services></app-services>
    <app-about></app-about>
    <app-latest-works></app-latest-works>
    <app-talk></app-talk>
    <app-blog-posts></app-blog-posts>
    <app-clients></app-clients>
    <app-contact></app-contact>
    <app-footer></app-footer>
  </div> 
</template>

<script>

  import AppWelcome from './components/welcome';
  import AppServices from './components/services';
  import AppAbout from './components/aboutUs';
  import AppLatestWorks from './components/latest-works';
  import AppTalk from './components/talk';
  import AppBlogPosts from './components/blog-posts';
  import AppClients from './components/clients';
  import AppContact from './components/contact';
  import AppFooter from './components/footer';

export default {
  components: {
    AppWelcome,
    AppServices,
    AppAbout,
    AppLatestWorks,
    AppTalk,
    AppBlogPosts,
    AppClients,
    AppContact,
    AppFooter
  }
}
</script>






